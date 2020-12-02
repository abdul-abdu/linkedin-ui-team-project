import React from "react";
import { Container } from "react-bootstrap";
import PostsColumn from "./PostsColumn";

class FeedPage extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        THIUS IS THE FEED PAGE DOOD <PostsColumn />{" "}
      </Container>
    );
  }
}

export default FeedPage;
