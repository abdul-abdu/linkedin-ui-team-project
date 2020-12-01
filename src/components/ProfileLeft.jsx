import React from "react";
import Form from "../components/Form";
import "../styles/ProfileLeft.css";
import {
  Dropdown,
  DropdownButton,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import DropdownProfileMenu from "./DropdownProfileMenu";

class ProfileLeft extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-8 mt-3">
        <div className="profile-card">
          <div class="profile-profile-section">
            <div className="coverImgHolder">
              <img
                src="/assets/images/cover.jpg"
                alt="cover-img"
                className="fluid coverImg"
              />
            </div>
            <div className="profilePic">
              <img src="/assets/images/user-placeholder.png" alt="profilePic" />
            </div>
            <div className="profile-info">
              <div className="buttons-row">
                <DropdownProfileMenu />
                <Button id="moreBtn">More...</Button>
                <BiPencil className="biPencil" />
              </div>
            </div>
            <div className="nameSurnameUni">
              <h4>Name Surname</h4>
              <p style={{ fontSize: "1.2rem" }}>Software Engineer</p>
              <p style={{ lineHeight: "0.01rem" }}>
                New York •{" "}
                <span style={{ color: "#0A66C2" }}>Contact info</span>
              </p>
            </div>
            <Container className="fluid boxes">
              <Row className="row-cols-12 row-cols-md-12">
                <Col>
                  <div className="profile-info-box">
                    <p>
                      <strong>Show recruiters you're open to work</strong> - you
                      control who sees this. •
                      <span style={{ color: "#0A66C2" }}>Get started</span>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="profile-info-box">
                    <p>
                      <strong>Share that you're hiring</strong> - and attract
                      qualified candidates •
                      <span style={{ color: "#0A66C2" }}>Get started</span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="profile-card mt-3">
          <div className="profile-profile-section" style={{ padding: "10px" }}>
            <div className="component-exp-wrapper">
              <h4 style={{ texAlign: "left !important" }}>Featured</h4>
              <Form />
            </div>
            <div className="profile-info-box" style={{ margin: "0 auto" }}>
              <p style={{ textAlign: "left" }}>
                <strong>Showcase your work</strong> by featuring your best
                posts, documents, media and websites.
                <a style={{ color: "#0A66C2" }}>
                  <br />
                  Add Featured
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileLeft;
