import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { GrAdd } from "react-icons/gr";
import "./styles/Form.css";

class FormModal extends React.Component {
  state = {
    show: false,
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    },
  };

  sendData = async (e) => {
    e.preventDefault();
    await this.postExperience();
    this.cheekyFetch();
  };

  postExperience = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(this.state.experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      let message = await response.json();
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  cheekyFetch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      let paresedResponse = await response.json();
      console.log(paresedResponse);
    } catch (error) {
      console.log(error);
    }
  };

  updateFormField = (e) => {
    let experience = { ...this.state.experience };
    let currentId = e.currentTarget.id;
    experience[currentId] = e.currentTarget.value;
    this.setState({ experience: experience });
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
                  id="role"
                  onChange={this.updateFormField}
                  value={this.state.experience.role}
                  placeholder="Es: Reatail Sales Manager"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  id="company"
                  onChange={this.updateFormField}
                  value={this.state.experience.company}
                  placeholder="Es: Google"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Current job" />
                <Form.Label>Start Date *</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  onChange={this.updateFormField}
                  value={this.state.experience.startDate}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date </Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  onChange={this.updateFormField}
                  value={this.state.experience.endDate}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  onChange={this.updateFormField}
                  value={this.state.experience.description}
                  rows={4}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  id="area"
                  onChange={this.updateFormField}
                  value={this.state.experience.area}
                  placeholder="Es: Milano"
                />
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
            <Button variant="primary" onClick={(e) => this.sendData(e)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
