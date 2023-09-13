import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import CheckListForm from "../CheckListForm";
import Checklist from "../Checklist";

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Create Your List
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-90w"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Your List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CheckListForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MyModal;
