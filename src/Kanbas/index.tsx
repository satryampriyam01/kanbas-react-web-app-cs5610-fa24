import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { enrollInCourse } from './Courses/EnrollmentReducer'; // Adjust the import path
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";

export default function Kanbas() {
  
  const dispatch = useDispatch(); // Initialize dispatch
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  
  const { currentUser } = useSelector((state: any) => state.accountReducer)

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    console.log("New Course Added:", newCourse);
    
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses, newCourse];
      console.log("Updated Courses:", updatedCourses); // Log updated courses
      return updatedCourses;
    });

    // Dispatch the enrollInCourse action for the current user
    if (currentUser) {
      dispatch(enrollInCourse({ userId: currentUser._id, courseId: newCourse._id }));
    }
  };

  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Session>
    <div id="wd-kanbas">
      <KanbasNavigation />

      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>

    </Session>
  );
}
