import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostsColumn from "./PostsColumn";

class FeedPage extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>THIUS IS THE FEED PAGE DOOD</Col>
          <Col>
            <PostsColumn />
          </Col>
          <Col>THIUS IS THE FEED PAGE DOOD</Col>
        </Row>
      </Container>
    );
  }
}

export default FeedPage;
