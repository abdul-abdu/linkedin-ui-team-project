import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/IndividualPost.css";
import PublicIcon from "@material-ui/icons/Public";
import { withRouter } from "react-router-dom";
import PostDropdown from "./PostDropdown";

class IndividualPost extends React.Component {
  render() {
    return (
      <Container className="feedPost">
        {(this.props.post.user.name.toLowerCase().includes("sexy") ||
          this.props.post.user.surname.toLowerCase().includes("sexy") ||
          this.props.post.text.toLowerCase().includes("sexy")) && (
          <Row className="kreyGasm">
            <Col className="memeMachine">
              <span className="sexyBeast">Sexy Beast</span>
              <span className="likesThis">likes this</span>
            </Col>
            <hr />
          </Row>
        )}
        <Row>
          <Col className="postTopRow">
            <div>
              <img src={this.props.post.user.image} alt="userImage" />
            </div>
            <div className="nameBox">
              <h6
                onClick={() =>
                  this.props.history.push(
                    "/profile/" + this.props.post.user._id
                  )
                }
              >
                {this.props.post.user.name + " " + this.props.post.user.surname}{" "}
                <span> • 1st</span>
              </h6>
              <span>{this.props.post.user.title}</span>
              <span>
                {this.props.post.createdAt} • <PublicIcon fontSize="small" />
              </span>
            </div>
            <PostDropdown user={this.props.post.user} />
          </Col>
        </Row>
        <Row className="postMiddleRow">
          <Col xs={12}>
            <p>{this.props.post.text} </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} className="postBottomRow">
            <div className="postBottomIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg>
              <span>Like</span>
            </div>
            <div className="postBottomIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
              </svg>
              <span>Comment</span>
            </div>
            <div className="postBottomIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
              </svg>
              <span>Share</span>
            </div>
            <div className="postBottomIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
              </svg>
              <span>Send</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(IndividualPost);
