import { useQuery } from "@apollo/client";
import getlocation from "../utils/map";
import  Modal  from "../components/Modal";
import ModalTwo from "../components/ModalTwo";
import { GET_ALL_CHECKLISTS } from "../utils/queries";

import React, { useState, useEffect } from 'react';

const styles = {
  map: {
    width: '200%',
    height: '400px',
    backgroundColor: 'grey',
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
          <div id="demo" style={styles.map}  className="box col-5">
          <p>Click the button to get your coordinates.</p>
        </div>
          <div className="col-12 col-md-8 mb-3">
            {/* {loading ? (
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
