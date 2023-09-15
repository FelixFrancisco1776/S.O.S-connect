import { Link } from "react-router-dom";
import getlocation from "../../utils/map";
import Auth from "../../utils/auth";
import ModalThree from "../ModalThree";
// const styles = {
//   map: {
//     height: "100%",
//     width: "100%",
//     position: "absolute",
//     top: "0",
//     left: "0",
//     zIndex: "-1",
//   },
// };
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="text-white mb-4 py-3 flex-row align-center">
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/me"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-grid"></i>
              <span>List</span>
            </a>
          </li>
          <li className="nav-item">
            {/* div to show the map */}
            <a className="nav-link collapsed" onClick={getlocation}>
              <i className="bi bi-grid"></i>
              <ModalThree />
            </a>
          </li>
        </ul>
      </aside>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">S.O.S Crisis</h1>
          </Link>
          {/* <div id="demo" style={styles.map} className="map m-0">
            <p>Click the button to get your coordinates.</p>
          </div> */}
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {Auth.getProfile()?.authenticatedPerson?.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
