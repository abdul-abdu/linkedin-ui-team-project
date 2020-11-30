import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LinkedinLearning from "./LinkedinLearning";
import PeopleRelated from "./PeopleRelated";

class RightSideColumn extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <PeopleRelated />
            <LinkedinLearning />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RightSideColumn;
