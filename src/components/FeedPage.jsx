import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import CreateFeed from "./CreateFeed";
import HomeProfile from "./HomeProfile";
import HomeRight from "./HomeRight";
import PostsColumn from "./PostsColumn";
import "./styles/FeedPage.css";

class FeedPage extends React.Component {
  state = {
    postArray: [],
    loading: true,
  };

  componentDidMount = () => {
    this.fetchPosts();
  };

  fetchPosts = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ postArray: parsedResponse.reverse() });
      this.setState({ loading: false });
      console.log(this.state.postArray);
    } catch (error) {
      console.log("uh oh stinky when fetching all the posts", error);
    }
  };

  render() {
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col md={2}>
            <HomeProfile />
          </Col>
          <Col md={6} style={{ marginLeft: "2rem" }}>
            <Row style={{ width: "111%", marginLeft: "-4%" }}>
              <CreateFeed fetchPosts={this.fetchPosts} />
            </Row>
            <hr
              style={{
                backgroundColor: "#deddda",
                margin: "1rem 0",
                width: "100%",
              }}
            />
            <Row className="d-flex justify-content-center">
              {this.state.loading && (
                <Spinner animation="border" variant="primary" />
              )}
              {this.state.postArray && !this.state.loading && (
                <PostsColumn
                  user={this.props.user}
                  postArray={this.state.postArray}
                  fetchPosts={this.fetchPosts}
                />
              )}
            </Row>
          </Col>
          <Col md={3} style={{ marginLeft: "20px" }}>
            <HomeRight />
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

export default FeedPage;
