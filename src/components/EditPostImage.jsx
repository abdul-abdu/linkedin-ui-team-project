import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Form } from "react-bootstrap";

class EditPostImage extends React.Component {
  state = {
    show: false,
    image: {},
  };

  postImage = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      let chosenImage = await document.querySelector("#postImageDood").files[0];
      await this.setState({ image: chosenImage });
      await formData.append("post", this.state.image);
      console.log(chosenImage);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + this.props.postID,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      if (response.ok) {
        this.props.fetchPosts();
        this.setState({ show: false });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.show) {
      return (
        <>
          <div
            className="dreamsDropDistance"
            onClick={() => this.setState({ show: false })}
          >
            <div className="iconMaster">
              <EditIcon />
            </div>
            <div className="megatron">
              <span className="is">Change your post?</span>
              <span className="dumb">
                If you've made a mistake, you can fix it!
              </span>
            </div>
          </div>
          <div className="postDrop">
            <Form onSubmit={(e) => this.postImage(e)}>
              <Form.Group>
                <Form.Label htmlFor="postImageDood">
                  Change Post Image:
                </Form.Label>
                <Form.Control type="file" id="postImageDood" />
              </Form.Group>
              <Button type="submit">SEND</Button>
            </Form>
          </div>
        </>
      );
    } else {
      return (
        <div
          className="dreamsDropDistance"
          onClick={() => this.setState({ show: true })}
        >
          <div className="iconMaster">
            <EditIcon />
          </div>
          <div className="megatron">
            <span className="is">Change your post?</span>
            <span className="dumb">
              If you've made a mistake, you can fix it!
            </span>
          </div>
        </div>
      );
    }
  }
}

export default EditPostImage;
