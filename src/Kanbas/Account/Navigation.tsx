import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

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
      <br />
    </div>
  );
}
