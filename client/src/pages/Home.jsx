import { useQuery } from "@apollo/client";

import Modal from "../components/Modal";
import ModalTwo from "../components/ModalTwo";
import ModalThree from "../components/ModalThree";
import { GET_ALL_CHECKLISTS } from "../utils/queries";

import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <main>
      <div className="row">
        <div className="col-md-5 ml-auto">
          <div className="col-12 col-md-8 mb-3 p-3">
            <Modal />
          </div>
          <div className="col-12 col-md-8 mb-3">
            <ModalTwo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
