import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PeopleRelated from "./PeopleRelated";

class RightSideColumn extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <PeopleRelated />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RightSideColumn;
