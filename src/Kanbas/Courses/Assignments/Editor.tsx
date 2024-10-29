import React, { useEffect } from "react";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  cancelAssignmentUpdate,
} from "./reducer";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";

function AssignmentEditor() {
  const { aid, cid } = useParams();
  console.log("aid:" ,aid);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewAssignment = !aid || aid.trim() === "";
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  useEffect(() => {
    const assignmentData = assignmentList.find((a) => a._id === aid);
    if (assignmentData) {
      dispatch(setAssignment(assignmentData));
    } else {
      // If no assignment is found, you may want to initialize it here
      dispatch(
        setAssignment({
          title: "",
          description: "",
          points: 0,
          dueDateTime: "",
          availableFromDate: "",
          availableUntilDate: "",
        })
      );
    }
  }, [dispatch, aid, assignmentList]);

  const handleSave = () => {
    console.log(isNewAssignment)
    if (isNewAssignment) {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(), // Assign ID here
        course: cid,
      };
      console.log("New Assignment Data:", newAssignment);
      dispatch(addAssignment(newAssignment)); // Only add the new assignment
    } else {
      console.log("New Assignment Data:", assignment);
      dispatch(updateAssignment(assignment)); // Update existing assignment
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate after save
  };

  const handleCancel = () => {
    dispatch(cancelAssignmentUpdate(assignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input
        value={assignment?.title}
        onChange={(e: { target: { value: any } }) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
        className="form-control mb-2"
      />
      <br />
      <textarea
        value={assignment?.description}
        className="form-control"
        cols={50}
        rows={5}
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
      ></textarea>
      <br />
      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          Points
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <input
            className="form-control"
            type="number"
            placeholder="Points"
            aria-label="default input example"
            value={assignment?.points}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, points: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          Assignment Group
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select className="form-control form-select">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          Display Grade as
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select className="form-control form-select">
            <option>Percentage</option>
            <option>Decimal</option>
            <option>Percentile</option>
          </select>
        </div>
      </div>
      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        ></div>
        <div className="col-sm-6 col-md-8" style={{ textAlign: "start" }}>
          <input type="checkbox" />
          Do not count this assignment towards the final grade
        </div>
      </div>
      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          Submission Type
        </div>
        <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
          <div
            className="wd-group"
            style={{
              border: "0.5px solid black",
              borderRadius: "1%",
              padding: "10px",
            }}
          >
            <select className="form-control">
              <option>Online</option>
              <option>In-Person</option>
            </select>
            <br />
            <b>Online Entry Options</b>
            <br />
            <input type="checkbox" checked id="textEntry" />
            <label>Text Entry</label> <br />
            <input type="checkbox" checked /> Website URL <br />
            <label>
              <input type="checkbox" checked /> Media recordings{" "}
            </label>
            <br />
            <input type="checkbox" /> Student Annotation <br />
            <input type="checkbox" checked /> File Uploads <br />
            <input type="checkbox" /> Restrict Upload File Types <br />
            <br />
          </div>
        </div>
      </div>
      <div className="row g-0 text-end">
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          Assign
        </div>
        <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
          <div
            className="wd-group"
            style={{
              border: "0.5px solid black",
              borderRadius: "1%",
              padding: "10px",
            }}
          >
            <b>Assign to</b>
            <input
              className="form-control"
              type="text"
              placeholder="Choose"
              value="Everyone"
              aria-label="default input example"
            />
            <br />
            <b>Due</b>
            <input
              className="form-control"
              type="datetime-local"
              value={assignment?.dueDateTime}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, dueDateTime: e.target.value })
                )
              }
            />

            <br />
            <div
              className="wd-flex-row-container"
              style={{
                width: "-webkit-fill-available",
                justifyContent: "space-around",
              }}
            >
              <div className="row">
                <div className="col">
                  <b>Available from </b>
                </div>
                <div className="col">
                  <b>Until </b>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <input
                    className="form-control w-75"
                    type="datetime-local"
                    value={assignment?.availableFromDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          availableFromDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control w-75"
                    type="datetime-local"
                    value={assignment?.availableUntilDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          availableUntilDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <div
          className="d-flex justify-content-between"
          style={{ paddingTop: "15px" }}
        >
          <span style={{ marginLeft: "20px", paddingTop: "15px" }}>
            <input type="checkbox" />
            Notify users that this content has changed
          </span>
          <span>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              onClick={() => dispatch(cancelAssignmentUpdate(assignment))}
              className="btn"
              style={{ height: "fit-content", backgroundColor: "#E0E0E0" }}
            >
              Cancel
            </Link>
            <button
              onClick={handleSave}
              className="btn btn-danger"
              style={{ marginRight: "5px" }}
            >
              Save
            </button>
          </span>
        </div>

        <hr style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
}

export default AssignmentEditor;
