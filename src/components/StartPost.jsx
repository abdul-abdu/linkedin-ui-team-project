import { Link } from "@material-ui/core";
import { BsPencilSquare } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillPlaySquare } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";

import "../styles/StartPost.css";

const { Component } = require("react");
const { Modal, Button, Form } = require("react-bootstrap");

class StartPost extends Component {


  state = {
    show: false
  }

  setModalShow = (boolean) => this.setState({ show: boolean })

  handleClose = () => this.setModalShow(false);
  handleShow = () => this.setModalShow(true);

  render() {
    return (
      <>
        <div className='d-flex align-items-center'
          onClick={this.handleShow}
        >
          <BsPencilSquare />
          <Form.Control size="lg" type="text" placeholder="Start a post" disabled />
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
            <div>
              <Link to='#ss'>Add hashtag </Link>
              <span> Help the right people see your post</span>
            </div>
            <div className='d-flex justify-content-between'>
              <div>
                <Link><CgMathPlus /></Link>
                <Link><AiFillPlaySquare /></Link>
                <Link><GrNotes /></Link>
                <Link><HiOutlinePhotograph /></Link>
              </div>
              <div>
                <Button>Post</Button>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div className='d-flex justify-content-between'>
              <div>
                <div>
                  <Button >Celebrate an occasion</Button>
                </div>
                <div>
                  <Button >Create a poll</Button>
                </div>
                <div>
                  <Button >Offer help</Button>
                </div>
              </div>
              <div>
                <div>
                  <Button >Find an export</Button>
                </div>
                <div>
                  <Button >Add a profile</Button>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default StartPost