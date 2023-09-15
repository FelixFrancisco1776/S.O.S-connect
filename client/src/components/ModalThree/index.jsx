import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CurrentLocation from "../CurrentLocation";
import getlocation from "../../utils/map";

function MyModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  function handleButtonClick() {
    handleShow();
    getlocation();
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleButtonClick}
      >
        Show Location
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Current Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CurrentLocation />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
