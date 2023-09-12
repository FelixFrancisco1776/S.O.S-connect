import { useQuery } from "@apollo/client";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="row">
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link collapsed" href="/">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="/me">
                <i className="bi bi-grid"></i>
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
              <a className="nav-link collapsed" href="/">
                <i className="bi bi-grid"></i>
                <span>Blank</span>
              </a>
            </li>
          </ul>
        </aside>
        <div className="col-md-5 ml-auto">
          <div
            className="col-12 col-md-8 mb-3 p-3"
            style={{
              backgroundColor: "#edede9",
              opacity: "0.8",
              borderRadius: "65px",
            }}
          >
            <ThoughtForm />
          </div>
          <div
            className="col-12 col-md-8 mb-3"
            style={{
              backgroundColor: "#edede9",
              opacity: "0.8",
              borderRadius: "65px",
            }}
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ThoughtList
                thoughts={thoughts}
                title="Check out the lists below"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
