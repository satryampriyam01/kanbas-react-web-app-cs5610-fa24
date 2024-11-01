import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnrollmentState, Enrollment } from './types';
import { enrollments as initialEnrollments } from "../Database";

// Load enrollments from local storage or use initial data
const loadEnrollments = () => {
  const savedEnrollments = localStorage.getItem('enrollments');
  return savedEnrollments ? JSON.parse(savedEnrollments) : initialEnrollments;
};

const saveEnrollments = (enrollments: Enrollment[]) => {
  localStorage.setItem('enrollments', JSON.stringify(enrollments));
};

const initialState: EnrollmentState = {
  enrollments: loadEnrollments(),
  showAllCourses: false,
};

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState,
  reducers: {
    toggleShowAllCourses(state) {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse(state, action: PayloadAction<{ userId: string; courseId: string }>) {
      const existingEnrollment = state.enrollments.find(
        (enrollment) =>
          enrollment.user === action.payload.userId &&
          enrollment.course === action.payload.courseId
      );

      if (!existingEnrollment) {
        const newId = (state.enrollments.length + 1).toString();
        const newEnrollment = {
          _id: newId,
          user: action.payload.userId,
          course: action.payload.courseId,
        };
        
        state.enrollments.push(newEnrollment);
        saveEnrollments(state.enrollments); // Persist to local storage
      }
    },
    unenrollFromCourse(state, action: PayloadAction<{ userId: string; courseId: string }>) {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === action.payload.userId && enrollment.course === action.payload.courseId)
      );

      saveEnrollments(state.enrollments); // Persist to local storage
    },
  },
});

export const { toggleShowAllCourses, enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
