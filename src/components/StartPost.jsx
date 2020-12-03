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
    show: false,
    fetching: false,
    post: { text: "" },
    errMessage: "",
  };

  setModalShow = (boolean) => this.setState({ show: boolean });

  handleClose = () => this.setModalShow(false);
  handleShow = () => this.setModalShow(true);

  updatePostField = (e) => {
    let Post = { ...this.state.post };
    let textPost = Post.text;

    textPost = e.currentTarget.value;
    Post.text = textPost;
    this.setState({ post: Post });
  };

  submitPost = async (e) => {
    e.preventDefault();
    this.setState({ fetching: true });

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          method: "POST",
          body: JSON.stringify(this.state.post),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          }),
        }
      );

      if (response.ok) {
        alert("Post sent !");
        this.setState({
          post: { text: "" },
          errMessage: "",
          fetching: false,
        });
        this.props.fetchPosts();
        this.handleClose();
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
          fetching: false,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="d-flex align-items-center" onClick={this.handleShow}>
          <BsPencilSquare className="mr-3" />
          <Form.Control
            disabled
            size="lg"
            type="text"
            placeholder="Start a post"
          />
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Post</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.submitPost}>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  size="lg"
                  as="textarea"
                  placeholder="What do you want to talk about?"
                  id="post"
                  value={this.state.text}
                  onChange={this.updatePostField}
                  required
                />
                <br />
              </Form.Group>
              <div>
                <Link to="#ss">Add hashtag </Link>
                <span> Help the right people see your post</span>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link>
                    <CgMathPlus />
                  </Link>
                  <Link>
                    <AiFillPlaySquare />
                  </Link>
                  <Link>
                    <GrNotes />
                  </Link>
                  <Link>
                    <HiOutlinePhotograph />
                  </Link>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <div className="feed-btn-wrapper">
                <Button
                  type="submit"
                  variant="outline-dark"
                  className="feed-btn"
                >
                  POST
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default StartPost;
