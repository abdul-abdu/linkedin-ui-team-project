import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { GrAdd } from "react-icons/gr";
import "./styles/Form.css";

class FormModal extends React.Component {
  state = {
    show: false,
  };
  render() {
    const handleShow = () => {
      this.setState({ show: true });
    };

    const handleClose = () => {
      this.setState({ show: false });
    };
    const { show } = this.state;
    return (
      <>
        <Button id="modal-btn" variant="primary" onClick={handleShow}>
          <GrAdd />
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Experiencies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Role *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es: Reatail Sales Manager"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Es: Google" required />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Current job" />
                <Form.Label>Start Date *</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Start Date *</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>description</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Es: Milano" />
              </Form.Group>
            </Form>
            <div className="button-modal-wrapper">
              <Button id="upload-btn">Upload</Button>
              <Button id="link-btn">Link</Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
