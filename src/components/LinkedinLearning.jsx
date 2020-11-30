import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LinkedinLearning.css";
import PlayCircleOutlineTwoToneIcon from "@material-ui/icons/PlayCircleOutlineTwoTone";

class LinkedinLearning extends React.Component {
  render() {
    return (
      <Container id="LearningRecomend">
        <Row>
          <h6>Add new skills with these courses</h6>
        </Row>
        <Row className="RecomendItem">
          <Col xs={4}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E0DAQHJWEtCkZY69A/learning-public-crop_60_100/0/1567118675734?e=1606820400&v=beta&t=DvE0sVL2nMnpaatlovoGK7FOR3tDNlQPiygQisJJDvk"
              alt=""
            />
            <div className="playButton">
              <PlayCircleOutlineTwoToneIcon fontSize="large" />
            </div>
          </Col>
          <Col
            xs={8}
            className="d-flex flex-column justify-content-between pl-4"
          >
            <span>React.js: Building an Interface</span>
            <span className="text-muted">20,701 viewers</span>
          </Col>
        </Row>
        <hr />
        <Row className="RecomendItem">
          <Col xs={4}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E0DAQHPNM2fQMo90g/learning-public-crop_60_100/0?e=1606820400&v=beta&t=SSa3q01TC1dOqAlamyvG4krDC4njj_IYfPi7W7NsZyM"
              alt=""
            />
            <div className="playButton">
              <PlayCircleOutlineTwoToneIcon fontSize="large" />
            </div>
          </Col>
          <Col
            xs={8}
            className="d-flex flex-column justify-content-between pl-4"
          >
            <span>Vanilla JavaScrpit: Animations</span>
            <span className="text-muted">8,317 viewers</span>
          </Col>
        </Row>
        <hr />
        <Row className="RecomendItem lastItem">
          <Col xs={4}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E0DAQFing13WinZFA/learning-public-crop_60_100/0?e=1606820400&v=beta&t=1ohd3Yqq7bak3ogD8aTXPiOeFVJDT_chTQzNe5cvH-o"
              alt=""
            />
            <div className="playButton">
              <PlayCircleOutlineTwoToneIcon fontSize="large" />
            </div>
          </Col>
          <Col
            xs={8}
            className="d-flex flex-column justify-content-between pl-4"
          >
            <span>CSS Selectors for React Developers</span>
            <span className="text-muted">2,570 viewers</span>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <h6>Show more on LinkedIn Learning</h6>
        </Row>
      </Container>
    );
  }
}

export default LinkedinLearning;
