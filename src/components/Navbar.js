import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setUser(null);
  };

  return (
    <div className="navBar">
      {!props.user && (
        <>
          <div className="navLogin">
            <Link className="navLink" to="/login">
              Login
            </Link>
          </div>
          <div className="navRegister">
            <Link className="navLink" to="/register">
              Register
            </Link>
          </div>
          <div className="navRoutines">
            <Link className="navLink" to="/routines">
              Routines
            </Link>
          </div>
          <div className="navActivities">
            <Link className="navLink" to="/activities">
              Activities
            </Link>
          </div>
        </>
      )}
      {props.user && (
        <>
          <div className="navRoutines">
            <Link className="navLink" to="/routines">
              Routines
            </Link>
          </div>
          <div className="navActivities">
            <Link className="navLink" to="/activities">
              Activities
            </Link>
          </div>
          <div className="navMyRoutines">
            <Link className="navLink" to="/my-routines">
              My Routines
            </Link>
          </div>
          <div className="navLogout">
            <Link className="out" onClick={handleLogout} to="/">
              Logout
            </Link>{" "}
          </div>
        </>
      )}
    </div>
  );
  {
    ("");
  }
  <span className="navMessage">Well hello there {props.user.username}</span>;
};

export default Navbar;
