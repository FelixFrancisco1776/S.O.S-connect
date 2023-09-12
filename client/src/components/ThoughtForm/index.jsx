import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_CHECKLIST } from "../../utils/mutations";
import { GET_ALL_CHECKLISTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const ThoughtForm = () => {
  const [items, setItems,] = useState([]);
  const [title, setTitle,] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addChecklist, { error }] = useMutation(ADD_CHECKLIST, {
    refetchQueries: [GET_ALL_CHECKLISTS, "checkLists", QUERY_ME, "me"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   
    const idToken = localStorage.getItem("id_token");

    // Decode the JWT to get its payload
    const base64Url = idToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(window.atob(base64))
  
  
    // Now get the userId
    const userId = payload.authenticatedPerson._id;
    console.log(userId);
    try {
      
      const { data } = await addChecklist({
        variables: {
          items, title, userId,
          // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username
          thoughtAuthor: Auth.getProfile().authenticatedPerson.username,
        },
      });

      
      setItems(""); // clear form value
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "items" && value.length <= 280) {
      setItems((prevState) => [...prevState, value]);
      setCharacterCount(value.length);
    }
  };
  const handleTitle = (event) => {
    const { name, value, } = event.target;

    if (name === "title" && value.length <= 280) {
      setTitle(value);
      setCharacterCount(value.length);
    }
  };
// change the thought list form to make it the checklist and to add items to it and also connect the querys
  return (
    <div>
      <div>
        <h3>What Disaster are you preparing for?</h3>

        {Auth.loggedIn() ? (
          <>
            <p
              className={`m-0 ${
                characterCount === 280 || error ? "text-danger" : ""
              }`}
            >
              Character Count: {characterCount}/280
            </p>
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <textarea
                  name="title"
                  placeholder="Title"
                  value={title}
                  className="form-input w-100"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleTitle}
                ></textarea>
              {/* change this input to add a title and connect it to the mutation */}
              <div className="col-12 col-lg-9">
                <textarea
                  name="items"
                  placeholder="Add items to list"
                  value={thoughtText}
                  className="form-input w-100"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                ></textarea>
                <div
                  className="form-check"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Check
                  </label>
                </div>
              </div>
              
              <div className="col-12 col-lg-3">
                <button
                  className="btn btn-primary btn-block py-3"
                  type="submit"
                >
                  Create List
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </>
        ) : (
          <p>
            You need to be logged in to share your thoughts. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default ThoughtForm;
