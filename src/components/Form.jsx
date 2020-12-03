import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { GrAdd } from "react-icons/gr";
import "./styles/Form.css";

class FormModal extends React.Component {
  state = {
    show: false,
<<<<<<< Updated upstream
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    },
=======
    image: null,
    experience:
      this.props.method === "PUT"
        ? this.props.experience
        : {
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            area: "",
          },
>>>>>>> Stashed changes
  };

  componentDidMount = () => {
    this.cheekyFetch();
  };

  sendData = async (e) => {
    e.preventDefault();
    await this.postExperience();
    await this.cheekyFetch();
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
<<<<<<< Updated upstream
=======
  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
>>>>>>> Stashed changes

  updateFormField = (e) => {
    let experience = { ...this.state.experience };
    let currentId = e.currentTarget.id;
    experience[currentId] = e.currentTarget.value;
    this.setState({ experience: experience });
  };

  fetchExpImg = async () => {
    const formData = new FormData();
    formData.append("experience", this.state.image);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences/${this.props.expId}/picture`,
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
            Accept: "application/json",
          }),
          body: formData,
        }
      );
      if (response.ok) {
        const content = await response.json();
        this.fetchExperience();
        console.log(content);
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  };

  selectedImgHandler = (e) => {
    this.setState({ image: e.target.files[0] });
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
<<<<<<< Updated upstream
        <Button id="modal-btn" onClick={handleShow}>
          <GrAdd />
=======
        <Button
          id={this.props.method === "POST" ? "modal-button" : "edit-btn"}
          onClick={this.handleShow}
        >
          {this.props.method === "POST" ? <GrAdd /> : <BiPencil />}
>>>>>>> Stashed changes
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
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
                <Form.Check
                  className="my-2"
                  type="checkbox"
                  label="I'm currently working here"
                />
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
              <input
                name="experience"
                style={{ display: "none" }}
                type="file"
                value={this.state.image}
                onChange={(e) => {
                  this.selectedImgHandler(e);
                }}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
            </Form>
            <div className="button-modal-wrapper">
              <Button onClick={() => this.fileInput.click()} id="upload-btn">
                Upload
              </Button>
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
