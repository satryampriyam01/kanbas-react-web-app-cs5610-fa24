import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Enrollment } from "./Courses/types";
import { enrollInCourse, unenrollFromCourse, toggleShowAllCourses } from "./Courses/EnrollmentReducer";
import store from "./store";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentReducer);

  const isFaculty = currentUser && currentUser.role === 'FACULTY';
  const isStudent = currentUser && currentUser.role === 'STUDENT';
  console.log('Current Enrollments:', store.getState().enrollmentReducer.enrollments);

  // Filter enrolled courses for current user
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment: Enrollment) =>
      enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  // Toggle between all courses and enrolled courses
  const displayedCourses = showAllCourses ? courses : enrolledCourses;

  // Handle enroll and unenroll actions
  const handleEnrollToggle = (courseId: string) => {
    const isEnrolled = enrollments.some(
      (enrollment: Enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
    if (isEnrolled) {
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
    }
  };

  // Protect course navigation based on enrollment
  const handleNavigateToCourse = (courseId: string) => {
    const isEnrolled = enrollments.some(
      (enrollment: Enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
    if (isEnrolled || isFaculty) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You must be enrolled in this course to access it.");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <input
            value={course.name || ""}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description || ""}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      {isStudent && (
        <button
          className="btn btn-info float-end"
          onClick={() => dispatch(toggleShowAllCourses())}
        >
          {showAllCourses ? "View Enrolled Courses" : "View All Courses"}
        </button>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
            <div className="card rounded-3 overflow-hidden">
              <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <img
                  src={`/images/${course._id}.jpg`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/react.jpg";
                  }}
                  alt={`${course.name} Thumbnail`}
                  width="100%"
                  height={160}
                />
                <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                <p className="card-text" style={{ maxHeight: 100, overflow: "hidden", textOverflow: "ellipsis" }}>
                  {course.description}
                </p>
                
                {/* Buttons section */}
                <div>
                  <button className="btn btn-primary" onClick={() => handleNavigateToCourse(course._id)}>
                    Go
                  </button>

                  {isFaculty ? (
                    <>
                      <button
                        onClick={() => deleteCourse(course._id)}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setCourse(course)}
                        className="btn btn-warning float-end me-2"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    isStudent && (
                      <button
                        onClick={() => handleEnrollToggle(course._id)}
                        className={`btn float-end ${enrollments.some(
                          (enrollment: Enrollment) =>
                            enrollment.user === currentUser._id && enrollment.course === course._id
                        )
                          ? "btn-danger"
                          : "btn-success"}`}
                      >
                        {enrollments.some(
                          (enrollment: Enrollment) =>
                            enrollment.user === currentUser._id && enrollment.course === course._id
                        )
                          ? "Unenroll"
                          : "Enroll"}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
