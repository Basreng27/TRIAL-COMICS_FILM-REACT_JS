import React from "react";
import { Button, Modal } from "react-bootstrap";

function ModalForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="dark-mode">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="dark-mode">{props.formInput}</Modal.Body>

      <Modal.Footer className="dark-mode">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
