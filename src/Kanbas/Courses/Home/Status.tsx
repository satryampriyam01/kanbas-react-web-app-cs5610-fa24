import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaFolderPlus, FaHouseUser, FaEye, FaBell, FaChartLine, FaComment } from "react-icons/fa"; // Import additional icons
import GreenCheckmark from "../Modules/GreenCheckmark";
import GreyBanMark from "../Modules/GreyBanMark";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="d-none d-lg-block ms-2">
      <h3>Course Status</h3>
      <ul className="list-unstyled">
        <li className="mb-2 d-flex">
          <button className="btn btn-m btn-secondary me-1 flex-grow-1 text-end">
            <GreyBanMark /> Unpublish
          </button>
          <button className="btn btn-m btn-secondary flex-grow-1 text-end">
            <GreenCheckmark /> Publish
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaInbox className="me-2" /> Import Existing Content
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaFolderPlus className="me-2" /> Import from Commons
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaHouseUser className="me-2" /> Choose Home Page
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaEye className="me-2" /> View Course Stream
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaBell className="me-2" /> New Announcement
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaChartLine className="me-2" /> New Analytics
          </button>
        </li>
        <li className="mb-2">
          <button className="btn btn-sm btn-secondary w-100 text-start">
            <FaComment className="me-2" /> View Course Notifications
          </button>
        </li>
      </ul>
    </div>
  );
}
