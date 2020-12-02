import { Link } from "@material-ui/core";
import { BsPencilSquare } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillPlaySquare } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";

const { Component } = require("react");
const { Modal, Button, Form } = require("react-bootstrap");

class StartPost extends Component {
  stete = {
    show: false
  }

  setModalShow = (boolean) => this.setState({ show: boolean })

  handleClose = () => this.setModalShow(false);
  handleShow = () => this.setModalShow(true);

  render() {
    return (
      <>
        <div className='d-flex align-items-center'>
          <BsPencilSquare />
          <Form.Control size="lg" type="text" placeholder="Large text" />
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Create Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control size="lg" type="textarea" placeholder="What do you want to talk about?" />
              <br />
            </Form.Group>
            <Form.Row>
              <Link to='#ss'>Add hashtag</Link>
              <span>Help the right people see your post</span>
            </Form.Row>
            <Form.Row>
              <div className='d-flex justify-content-between'>
                <div>
                  <CgMathPlus />
                  <HiOutlinePhotograph />
                  <AiFillPlaySquare />
                  <GrNotes />
                </div>
                <div>
                  <Button>Post</Button>
                </div>
              </div>
            </Form.Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default StartPost