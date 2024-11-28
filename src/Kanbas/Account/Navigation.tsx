import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-11 rounded-0">
      {!currentUser && (
        <>
          <Link
            to={`/Kanbas/Account/Signin`}
            className={`list-group-item text-danger border border-0 ${
              pathname === "/Kanbas/Account/Signin" ? "active" : ""
            }`}
          >
            Signin
          </Link>
          <Link
            to={`/Kanbas/Account/Signup`}
            className={`list-group-item text-danger border border-0 ${
              pathname === "/Kanbas/Account/Signup" ? "active" : ""
            }`}
          >
            Signup
          </Link>
        </>
      )}
      {currentUser && (
        <Link
          to={`/Kanbas/Account/Profile`}
          className={`list-group-item text-danger border border-0 ${
            pathname === "/Kanbas/Account/Profile" ? "active" : ""
          }`}
        >
          Profile
        </Link>
      )}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
      <br />
    </div>
  );
}
