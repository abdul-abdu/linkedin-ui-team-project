import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostsColumn from "./PostsColumn";
import "./styles/FeedPage.css";
import CreateFeed from "./CreateFeed";

class FeedPage extends React.Component {
  render() {
    return (
      <Container className="mt-5" id="soloHalo2">
        <Row>
          <Col>THIUS IS THE FEED PAGE DOOD</Col>
          <Col>
            <CreateFeed />
            <hr />
            <PostsColumn />
          </Col>
          <Col>THIUS IS THE FEED PAGE DOOD</Col>
        </Row>
      </Container>
    );
  }
}

export default FeedPage;
