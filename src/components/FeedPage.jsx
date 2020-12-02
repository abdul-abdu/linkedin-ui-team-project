import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import CreateFeed from './CreateFeed';
import HomeProfile from './HomeProfile';
import HomeRight from './HomeRight';
import PostsColumn from "./PostsColumn";
import "./styles/FeedPage.css";

class FeedPage extends React.Component {
  render() {
    return (
      <Container style={{marginTop: '2rem'}}>
        <Row>
          <Col md={2}><HomeProfile /></Col>
          <Col md={6}><CreateFeed /></Col>
          <Col md={3} style={{ marginLeft: '20px'}}><HomeRight /></Col>
        </Row>
        <hr />

      </Container>
    );
  }
}

export default FeedPage;
