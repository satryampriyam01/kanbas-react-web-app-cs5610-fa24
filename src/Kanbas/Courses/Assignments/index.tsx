import Button from "react-bootstrap/Button";
import "./index.css";
import {
  FaCheckCircle,
  FaChevronDown,
  FaEllipsisV,
  FaPencilAlt,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
   const { cid } = useParams();
//    assignments.forEach(assignment => {
//     console.log(assignment.course);
//     console.log(cid);
// })
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div className="col me-2">
      <div className="row wd-margin-top">
        <div className="float-end wd-margin-right">
          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaEllipsisV />
            </a>
          </div>
          <div className="wd-button float-end">
            <Button variant="danger btn-sm">
              <FaPlus className="me-1" />
              Assignment
            </Button>{" "}
          </div>

          <div className="wd-button float-end">
            <Button variant="secondary btn-sm">
              <FaPlus className="me-1" />
              Group
            </Button>{" "}
          </div>
          <div className="float-start w-25">
            <input
              className="form-control"
              id="input1"
              placeholder="Search for Assignment"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="wd-assignments-list">
        <ul
          className="list-group wd-margin-left"
          style={{ borderRadius: "0%" }}
        >
          <li className="list-group-item list-group-item-secondary">
            <div>
              <FaEllipsisV className="me-2" />
              <b>Assignments</b>
              <span className="float-end">
                <label
                  className="form-label pe-2 ps-2 me-3"
                  style={{
                    borderRadius: "50px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  40% of Total
                </label>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
          </li>
          <ul className="list-group" style={{ borderRadius: "0%" }}>
            {/* {assignmentList.length} */}
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className="row">
                  <div
                    className="col-auto"
                    style={{ margin: "auto", display: "flex" }}
                  >
                    <FaEllipsisV
                      style={{ verticalAlign: "middle", marginRight: "10px" }}
                    />
                    <FaPencilAlt />
                  </div>
                  <div className="col wd-fg-color-gray ps-0 ms-2">
                    <Link
                      style={{ color: "green", textDecoration: "none" }}
                      className="fw-bold ps-0"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    {"Multiple Modules"} | {"Not available until May 6 at 12:00 am"}
                    <br />
                    <b>Due</b> {"May 20 at 11:59pm"} | 100 points
                  </div>
                  <div
                    className="col-auto"
                    style={{ margin: "auto", display: "flex" }}
                  >
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
