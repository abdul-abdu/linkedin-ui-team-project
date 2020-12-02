import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import CreateFeed from './CreateFeed';
import HomeProfile from './HomeProfile';
import HomeRight from './HomeRight';

class FeedPage extends React.Component {
  render() {
    return (
      <Container style={{marginTop: '2rem'}}>
        <Row>
          <Col md={2}><HomeProfile /></Col>
          <Col md={7}><CreateFeed /></Col>
          <Col md={3}><HomeRight /></Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

export default FeedPage;
