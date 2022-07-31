import React, { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const FormModal = ({ handleShow, handleClose, setShow, show }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="hubspotForm"></div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Jack Reacher" autoFocus />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button
            className="demo_btn btn close_btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button className="demo_btn btn modal_btn" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <style>{customCss}</style>
    </>
  );
};

export default FormModal;

const customCss = `
.modal_btn {

  border-color: #BA61FF;
}
.close_btn {
  background: #6c757d;
  border-radius: 33px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 8px 34px;
  font-weight: 400;
  margin-left: 20px;
}
.close_btn:hover {
  color: #6c757d !important;
    background: #fff;
    border: 1px solid #6c757d;
}
`;
