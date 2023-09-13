import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import CheckListForm from "../CheckListForm";


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
          dialogClassName="modal-slide-fade"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Your List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CheckListForm />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default MyModal;
