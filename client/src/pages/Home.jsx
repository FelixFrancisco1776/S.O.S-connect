import Modal from "../components/Modal";
import ModalTwo from "../components/ModalTwo";
import React from "react";

const Home = () => {
  return (
    <main>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <p style={{ color: "#e1e1e1", fontWeight: "bold", fontSize: "30px" }}>
            Hello Users! Welcome to our amazing application. Here we have
            provided you with a way to prepare for any natural disaster. Look
            around the application and you will see that you will not be
            dissapointed!
          </p>
        </div>
        <div className="col-md-6 offset-md-3">
          <div className="mb-3 p-3">
            <Modal />
          </div>
          <div>
            <ModalTwo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
