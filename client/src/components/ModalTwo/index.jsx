import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Checklist from "../Checklist";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_CHECKLISTS } from "../../utils/queries";

function MyModal() {
  const [show, setShow] = useState(false);
  const { loading, error, data } = useQuery(GET_ALL_CHECKLISTS);

  const handleShow = () => {
    // this.setState({ show: true });
    setShow(true);
  };

  const handleClose = () => {
    // this.setState({ show: false });
    setShow(false);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (data) console.log(data);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show Created Lists
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Here are the Users lists: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checklist checkLists={data.checkLists} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
