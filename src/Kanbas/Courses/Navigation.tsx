import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the current course ID from the URL
  const { pathname } = useLocation(); // Get the current URL pathname

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        // Create the URL for each link dynamically based on the course ID
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;
        
        // Determine if the link is active by checking if the current pathname includes the link
        const isActive = pathname.includes(link);

        return (
          <Link
            key={link}
            to={linkPath}
            id={`wd-course-${link.toLowerCase()}-link`} // Dynamic ID for each link
            className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
