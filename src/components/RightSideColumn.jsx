import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LinkedinLearning from "./LinkedinLearning";
import PeopleRelated from "./PeopleRelated";

class RightSideColumn extends React.Component {
  render() {
    return (
      <div style={{ minWidth: "312px" }}>
        <PeopleRelated />
        <LinkedinLearning />
      </div>
    );
  }
}

export default RightSideColumn;
