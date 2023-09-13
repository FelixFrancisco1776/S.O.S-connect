import { useQuery } from "@apollo/client";
import getlocation from "../utils/map";
import  Modal  from "../components/Modal";
import ModalTwo from "../components/ModalTwo";
import { GET_ALL_CHECKLISTS } from "../utils/queries";

import React, { useState, useEffect } from 'react';

const styles = {
  map: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  },
};


const Home = () => {
  const { loading, data } = useQuery(GET_ALL_CHECKLISTS);
  const checkLists = data?.checkLists || [];

  // useEffect(() => {
  //   getlocation();
   
  // }, []);

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
              <a className="nav-link collapsed" href="/">
                <i className="bi bi-grid"></i>
                <span>Blank</span>
              </a>
            </li>
          </ul>
        </aside>
        <div className="col-md-5 ml-auto">
          <div className="col-12 col-md-8 mb-3 p-3"
          style={{backgroundColor:"#edede9", opacity:"0.8"}}>
            <CheckListForm />
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
              <ModalTwo
                checkLists={checkLists}
                title="Here are your checklists!"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
