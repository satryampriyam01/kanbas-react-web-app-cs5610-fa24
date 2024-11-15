import { FaSearch, FaPlus, FaEllipsisV, FaCheckCircle, FaFileAlt, FaCaretDown, FaTrash } from "react-icons/fa";
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [aidToDelete, setAidToDelete] = useState("");

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    return (
        <div className="container mt-4" id="wd-assignments">
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* Search Bar*/}
                <div className="input-group w-50">
                    <span className="input-group-text bg-white">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                    />
                </div>

                {/* Group and Assignment Buttons*/}
                <div className="d-flex justify-content-end">
                    {/* Group Button */}
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1">
                        <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                        Group
                    </button>
                    {/* Assignment Button */}
                    {currentUser.role === "FACULTY" && <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}>
                        <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                        Assignment
                    </button>}
                </div>
            </div>

            {/* Assignments */}
            <ul id="wd-assignments" className="list-group rounded-0">
                {/* Title */}
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        {/* Left Section */}
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaCaretDown className="me-2 fs-4" />
                            <strong>ASSIGNMENTS</strong>
                        </div>
                        {/* Right Section */}
                        <div className="d-flex align-items-center">
                            <span className="badge rounded-pill border border-dark text-dark me-3 px-3 py-2" style={{ backgroundColor: 'transparent' }}>
                                40% of Total
                            </span>
                            <BsPlus className="fs-2" />
                            <IoEllipsisVertical className="fs-4 ms-3" />
                        </div>
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {assignments.map((assignment: any) => (
                            <li
                                key={assignment._id}
                                className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center"
                                style={{ borderLeft: '4px solid green' }}
                            >
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FaFileAlt className="me-2 fs-4 text-success" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <Link
                                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        className="fs-5 me-2"
                                        style={{
                                            color: 'black', textDecoration: 'none', fontWeight: 'bold',
                                            pointerEvents: (currentUser.role === 'FACULTY' ? 'auto' : 'none')
                                        }}
                                    >
                                        {assignment.title}
                                    </Link>
                                    <p className="text-muted mb-0">
                                        <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    {currentUser.role === "FACULTY" &&
                                        <FaTrash className="text-danger me-3 mb-1" onClick={() => setAidToDelete(assignment._id)}
                                            data-bs-toggle="modal" data-bs-target="#wd-delete-confirmation-dialog" />}
                                    <FaCheckCircle className="text-success me-3 fs-5" />
                                    <FaEllipsisV className="text-secondary fs-5" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <DeleteConfirmationDialog onYes={() => removeAssignment(aidToDelete)}></DeleteConfirmationDialog>
        </div>
    );
}