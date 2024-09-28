import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <div className="form-group mb-2">
        
        <input 
          id="wd-username" 
          className="form-control" 
          defaultValue="alice" 
          placeholder="username" 
        />
      </div>

      <div className="form-group mb-2">
        <input 
          id="wd-password" 
          type="password" 
          className="form-control" 
          defaultValue="123" 
          placeholder="password" 
        />
      </div>

      <div className="form-group mb-2">
        <input 
          id="wd-firstname" 
          className="form-control" 
          defaultValue="Alice" 
          placeholder="First Name" 
        />
      </div>

      <div className="form-group mb-2">
        
        <input 
          id="wd-lastname" 
          className="form-control" 
          defaultValue="MERCY" 
          placeholder="Last Name" 
        />
      </div>

      <div className="form-group mb-2">
        <input 
          id="wd-dob" 
          type="date" 
          className="form-control mb-2" 
          defaultValue="2000-01-01" 
        />
      </div>

      <div className="form-group mb-2">
        <input 
          id="wd-email" 
          type="email" 
          className="form-control" 
          defaultValue="alice@wonderland" 
          placeholder="alice@wonderland" 
        />
      </div>

      <div className="form-group mb-2">
        <select id="wd-role" className="form-control mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <br />
      <Link to="/kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
