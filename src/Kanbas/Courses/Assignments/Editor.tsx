import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      {/* Assignment Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Assignment Description
        </label>
        <textarea id="wd-description" className="form-control" rows={10}>
          The assignment is available online. Submit a link to the landing page
          of your project.
        </textarea>
      </div>

      {/* Points */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-10">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-md-10">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </div>
      </div>

      {/* Display Grade as */}
      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-md-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="PERCENTAGE">Percentage</option>
            <option value="OTHERS">Others</option>
          </select>
        </div>
      </div>

      {/* Submission Section */}
      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="border p-3 mb-4 col-md-10">
          <div className="col">
            {/* Submission Type */}
            <div className="col-md-6 mb-3">
              <select id="wd-submission-type" className="form-select">
                <option value="ONLINE">Online</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>

            {/* Online Entry Options */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Online Entry Options</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="wd-text-entry"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="wd-website-url"
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="wd-media-recordings"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="wd-student-annotation"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="wd-file-upload"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Upload
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assign Section */}
      <div className="row">
        <div className="col-md-2">
          <label htmlFor="assign-to" className="form-label">
            Assign
          </label>
        </div>
        <div className="border p-3 mb-3 col-md-10">
          <div className="col">
            {/* Assign to */}
            <div className="col-md-6 mb-3">
              <label htmlFor="assign-to" className="form-label">
                Assign to
              </label>
              <input id="assign-to" value="Everyone" className="form-control" />
            </div>

            {/* Due Date */}
            <div className="col-md-6 mb-3">
              <label htmlFor="due-date" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                value="2023-09-18"
                id="due-date"
                className="form-control"
              />
            </div>

            {/* Availability Dates */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="avail-date" className="form-label">
                  Available from
                </label>
                <input
                  type="date"
                  value="2023-09-08"
                  id="avail-date"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="until-date" className="form-label">
                  Until
                </label>
                <input
                  type="date"
                  value="2023-09-18"
                  id="until-date"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <button type="reset" className="btn btn-secondary me-2">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
