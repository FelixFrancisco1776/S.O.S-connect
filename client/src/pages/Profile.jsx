import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Modal from "../components/Modal";
import ModalTwo from "../components/ModalTwo";

import Checklist from "../components/Checklist";
import CheckListForm from "../components/CheckListForm";
import { QUERY_USER } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() &&
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center m-auto">
        <h1
          className="col-12 col-md-10 p-3 mb-5"
          style={{ color: "#e1e1e1", fontSize: "75px" }}
        >
          Viewing {userParam ? `${user.username}'s` : "Your"} Profile.
        </h1>
        <div className="col-md-6 ml-auto">
          <div
            className="col-md-10 mb-5 p-3 ml-auto"
            style={{
              backgroundColor: "#edede9",
              opacity: "0.8",
              borderRadius: "65px",
            }}
          >
            <Modal />
          </div>
          <div
            className="col-12 col-md-10 mb-3 ml-auto"
            style={{
              backgroundColor: "#edede9",
              opacity: "0.8",
              borderRadius: "65px",
            }}
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ModalTwo
                checkLists={user?.checkLists}
                user={user}
                title="Here are your checklists!"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
