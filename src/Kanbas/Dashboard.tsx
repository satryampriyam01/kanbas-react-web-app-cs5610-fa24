import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addEnrollment, deleteEnrollment } from "./reducer";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [isEnrollmentMode, setIsEnrollmentMode] = useState(false);
    const [displayCourses, setDisplayCourses] = useState<any[]>([]);

    const fetchDisplayCourses = async () => {
        if (currentUser.role === "FACULTY" || isEnrollmentMode) {
            setDisplayCourses(await courseClient.fetchAllCourses());
        } else {
            setDisplayCourses(courses);
        }
    };

    useEffect(() => { fetchDisplayCourses(); }, [courses, isEnrollmentMode]);

    const enrollCourse = async (courseId: any) => {
        const enrollment = await userClient.enrollCourse(courseId);
        dispatch(addEnrollment(enrollment));
    };
    const unenrollCourse = async (courseId: any) => {
        await userClient.unenrollCourse(courseId);
        dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role === "FACULTY" &&
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5><br />
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </>
            }
            {currentUser.role === "STUDENT" &&
                <button className="btn btn-primary float-end me-2" id="wd-enrollment-mode-click"
                    onClick={() => setIsEnrollmentMode(!isEnrollmentMode)}>
                    Enrollment
                </button>
            }
            <h2 id="wd-dashboard-published">Published Courses ({displayCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src={`/images/${course._id}.jpg`} width="100%" height={160}
                                    onError={(e) => {
                                      e.currentTarget.src = "/images/react.jpg"; // Default fallback image
                                      e.currentTarget.onerror = null; // Prevent infinite loop if fallback fails
                                    }}
                                    />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>
                                        {currentUser.role === "FACULTY" &&
                                            <>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </>
                                        }
                                        {currentUser.role === "STUDENT" && isEnrollmentMode && (
                                            enrollments.some((enrollment: any) => enrollment.course === course._id) ?
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    unenrollCourse(course._id);
                                                }} className="btn btn-danger float-end" id="wd-unenroll-course-click">
                                                    Unenroll
                                                </button> :
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    enrollCourse(course._id);
                                                }} className="btn btn-success float-end" id="wd-enroll-course-click">
                                                    Enroll
                                                </button>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
