import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1235 Cyber Security
            </Link>
            <p className="wd-dashboard-course-title">Cyber Analyst</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1236 Cloud Computing
            </Link>
            <p className="wd-dashboard-course-title">Cloud Analyst</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1237 Data Science
            </Link>
            <p className="wd-dashboard-course-title">Data Scientist</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1238 Foundation of AI
            </Link>
            <p className="wd-dashboard-course-title">Data mining expert</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1239 Foundaiton of ML
            </Link>
            <p className="wd-dashboard-course-title">ML engineer</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/course-dummy-image.jpg"
            alt="Course-dummy-image"
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1230 Building Game Engines
            </Link>
            <p className="wd-dashboard-course-title">Graphics Developer</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
