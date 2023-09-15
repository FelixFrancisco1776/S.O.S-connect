import { Link } from "react-router-dom";
import getlocation from "../../utils/map";
import Auth from "../../utils/auth";
import ModalThree from "../ModalThree";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="text-white mb-4 py-3 flex-col align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">S.O.S Crisis</h1>
          </Link>
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
      <div className="navbar">
        <nav className="navbar-nav justify-center">
          <ul className="navbar-nav-items">
            <li className="nav-item">
              <a
                className="
                btn btn-primary"
                href="/"
              >
                Dashboard
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                btn btn-primary"
                href="/me"
              >
                Profile
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                btn btn-primary"
                href="/"
              >
                List
              </a>
            </li>
            <li className="nav-item">
              {/* div to show the map */}
              <a onClick={getlocation}>
                <ModalThree />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="
                btn btn-primary"
                href="/"
              >
                Current Weather
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
