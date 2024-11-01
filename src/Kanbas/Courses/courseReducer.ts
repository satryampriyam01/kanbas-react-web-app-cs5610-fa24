import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

const initialState = {
  courses: courses,
  course: {
    _id: new Date().getTime().toString(),
    name: "NEW",
    number: "NEW1",
    startDate: "",
    endDate: "",
    department: "",
    credits: 0,
    description: "",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const newCourse = {
        ...action.payload,
        _id: action.payload._id || new Date().getTime().toString(),
      };
      state.courses.push(newCourse);
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course: any) => course._id !== action.payload
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course: any) =>
        course._id === action.payload._id ? action.payload : course
      );
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    cancelCourseUpdate: (state) => {
      state.course = initialState.course;
    },
  },
});

// Export actions and reducer
export const {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourse,
  cancelCourseUpdate,
} = coursesSlice.actions;
export default coursesSlice.reducer;
