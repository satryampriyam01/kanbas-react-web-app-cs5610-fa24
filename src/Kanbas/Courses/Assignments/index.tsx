import Button from 'react-bootstrap/Button';
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPencilAlt, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { KanbasState } from '../../store';
import { deleteAssignment } from './reducer';

function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Select assignments and user role
    const assignmentsList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignmentList = assignmentsList.filter((a) => a.course === cid);
    const currentUserRole = useSelector((state: any) => state.accountReducer.currentUser?.role);

    // Handle deletion confirmation
    const handleDelete = () => {
        const result = window.confirm("Do you want to proceed?");
        return result; // return true or false based on user's choice
    };

    return (
        <div className="col me-2">
            <div className="row wd-margin-top">
                <div className="float-end wd-margin-right">
                    <div className="wd-button float-end">
                        <a className="btn btn-secondary btn-sm" href="#" role="button">
                            <FaEllipsisV />
                        </a>
                    </div>
                    {/* Show New Assignment button only for Faculty */}
                    {currentUserRole === "FACULTY" && (
                        <div className="wd-button float-end">
                            <Link to={"../Assignments/Editor"} className="btn btn-danger btn-sm" role="button">
                                <FaPlus className="me-1" />
                                Assignment
                            </Link>
                        </div>
                    )}
                    {/* Show Group button only for Faculty */}
                    {currentUserRole === "FACULTY" && (
                        <div className="wd-button float-end">
                            <Button variant="secondary btn-sm">
                                <FaPlus className="me-1" />
                                Group
                            </Button>
                        </div>
                    )}
                    <div className="float-start w-25">
                        <input className="form-control" id="input1" placeholder="Search for Assignment" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="wd-assignments-list">
                <ul className="list-group wd-margin-left" style={{ borderRadius: "0%" }}>
                    <li className="list-group-item list-group-item-secondary">
                        <div>
                            <FaEllipsisV className="me-2" />
                            <b>Assignments</b>
                            <span className="float-end">
                                <label
                                    className="form-label pe-2 ps-2 me-3"
                                    style={{ borderRadius: "50px", borderWidth: "1px", borderStyle: "solid" }}
                                >40% of Total</label>
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                    </li>
                    <ul className="list-group" style={{ borderRadius: "0%" }}>
                        {assignmentList.map((assignment) => (
                            <li className='list-group-item' key={assignment._id}>
                                <div className='row'>
                                    <div className='col-auto' style={{ margin: "auto", display: "flex" }}>
                                        <FaEllipsisV style={{ verticalAlign: "middle", marginRight: "10px" }} />
                                        <FaPencilAlt />
                                    </div>
                                    <div className='col wd-fg-color-gray ps-0 ms-2'>
                                        <Link style={{ color: 'green', textDecoration: 'none', pointerEvents:currentUserRole==='FACULTY'?'auto':'none'}} className="fw-bold ps-0"   to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} >
                                            {assignment.title}
                                        </Link>
                                        <br />
                                        {assignment.description} |
                                        <br /><b>Due</b> {assignment.dueDateTime.slice(0, 16)} | {assignment.points} points
                                    </div>
                                    <div className="col-auto" style={{ margin: "auto", display: "flex" }}>
                                        {/* Show Delete button only for Faculty */}
                                        {currentUserRole === "FACULTY" && (
                                            <button
                                                className="btn m-0 pt-0 pb-0 me-1 btn-danger btn-sm"
                                                onClick={() => {
                                                    if (handleDelete()) {
                                                        dispatch(deleteAssignment(assignment._id));
                                                    } else {
                                                        navigate(`/Kanbas/Courses/${cid}/Assignments`);
                                                    }
                                                }}>
                                                Delete
                                            </button>
                                        )}
                                        <FaCheckCircle style={{ color: "green" }} />
                                        <FaEllipsisV style={{ verticalAlign: "middle" }} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default Assignments;
