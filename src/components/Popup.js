import React from "react";
import { NavLink } from "react-router-dom";
import { Jumbotron, Button, Modal } from "react-bootstrap";
const Popup = () => (
  <div className="container">
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

export default Popup;
