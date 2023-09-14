import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Checklist from "../Checklist";
import { gql, useQuery } from '@apollo/client';
import { GET_ALL_CHECKLISTS, QUERY_USER } from "../../utils/queries";

function MyModal() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    // this.setState({ show: true });
    setShow(true)
  };

  const handleClose = () => {
    // this.setState({ show: false });
    setShow(false)
  };

  // componentDidMount() {
  //   fetch('')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // };

  // render() {
    const { loading, error, data } = useQuery(GET_ALL_CHECKLISTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    if(data) console.log(data);

    const user = useQuery(QUERY_USER);

    console.log(user.data);

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
            <Checklist
              checkLists={data.checkLists}
              user={user.user.username}
              
           />
          </Modal.Body>
        </Modal>
      </>
    );
  }
// }

export default MyModal;
