export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-group"> Assignment Group </label>
            <select id="wd-group">
              <option value="ASSINMENTS"> ASSIGNMENTS</option>
              <option value="OTHERS"> OTHERS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="wd-display-grade-as"> Display Grade as </label>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="OTHERS">Others</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="wd-submission-type"> Submission Type </label>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="OTHERS">Others</option>
            </select>
            <br />
            <label>Online Entry option</label>
            <br />
            <input type="checkbox" name="check-submission" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />

            <input
              type="checkbox"
              name="check-submission"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />

            <input
              type="checkbox"
              name="check-submission"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />

            <input
              type="checkbox"
              name="check-submission"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input
              type="checkbox"
              name="check-submission"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Upload</label>
            <br />
          </td>
        </tr>

        <tr>
          <td>
            <label>Assign</label>
            <br />
            <label htmlFor="assign-to">Assign to</label>
            <br />
            <input type="text" id="assign-to" value="Everyone" />
            <br />
            <br />

            <label htmlFor="due-date">Due</label>
            <br />
            <input type="date" value="2023-09-18" id="due-date" />
            <br />
            <br />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="avail-date">Available from</label>
            <br />
            <input type="date" value="2023-09-08" id="avail-date" />
            <br />
            <br />
          </td>

          <td>
            <label htmlFor="until-date">Until</label>
            <br />
            <input type="date" value="2023-09-18" id="until-date" />
            <br />
            <br />
          </td>
        </tr>
      </table>
      <hr></hr>

      <div align-right>
        <button type="reset">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
}
