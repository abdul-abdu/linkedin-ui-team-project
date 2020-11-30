import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "./IndividualPerson.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link, withRouter } from "react-router-dom";
import ShodyDivider from "./ShodyDivider";

class IndividualPerson extends React.Component {
  render() {
    return (
      <Row id="person" className="d-flex align-items-center">
        <Container className="p-0">
          <Row>
            <Col xs={3} className="d-flex align-items-center">
              <img src={this.props.pic} alt="" width="56px" />
            </Col>

            <Col className="d-flex flex-column align-items-start">
              <h6>{this.props.name}</h6>
              <span>{this.props.job}</span>
            </Col>

            <Col xs={2} className="d-flex align-items-center">
              <PersonAddIcon color="disabled" />
            </Col>
          </Row>
        </Container>
        {this.props.divider && <ShodyDivider />}
      </Row>
    );
  }
}

export default IndividualPerson;
