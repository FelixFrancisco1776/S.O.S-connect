import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
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
          Show Created Lists
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-90w"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Here are the Users lists: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Checklist />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default MyModal;
