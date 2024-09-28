import GreenCheckmark from "../Modules/GreenCheckmark";
import GreyBanMark from "../Modules/GreyBanMark";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="d-none d-lg-block ms-2">
      <h2>Course Status</h2>
      <ul className="list-unstyled">
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1"><GreyBanMark/>Unpublish</button>
          <button className="btn btn-sm btn-secondary"><GreenCheckmark />Publish</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">Import Existing Content</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">Import from Commons</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">Choose Home Page</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">View Course Stream</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">New Announcement</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">New Analytics</button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary me-1">View Course Notifications</button>
        </li>
      </ul>
    </div>
  );
}
