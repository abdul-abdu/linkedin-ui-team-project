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
    filteredArray: [],
    loading: true,
    profiles: [],
    blacklist: [],
    blacklistProfiles: [],
  };

  componentDidMount = () => {
    this.fetchPosts();
    this.fetchProfiles();
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
      if (this.state.blacklistProfiles.length > 0) {
        let postArray = [...this.state.postArray];
        await this.state.postArray.map((post) => {
          if (this.state.blacklistProfiles.includes(post.user._id)) {
            postArray.splice(postArray.indexOf(post), 1);
          }
        });
        console.log(postArray, "after map in enforce blacklist PROFILES");
        await this.setState({ postArray: postArray });
      }
      if (this.state.blacklist.length > 0) {
        let postArray = [...this.state.postArray];
        await this.state.postArray.map((post) => {
          if (this.state.blacklist.includes(post._id)) {
            postArray.splice(postArray.indexOf(post), 1);
          }
        });
        console.log(postArray, "after map in enforce blacklist POSTS");
        await this.setState({ postArray: postArray });
      }
      this.setState({ loading: false });
      console.log(this.state.postArray);
    } catch (error) {
      console.log("uh oh stinky when fetching all the posts", error);
    }
  };

  fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      let parsedResponse = await response.json();
      this.setState({ profiles: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  addToBlacklist = async (id, identifier) => {
    if (identifier === "post") {
      let newblacklist = [...this.state.blacklist];
      newblacklist.push(id);
      await this.setState({ blacklist: newblacklist });
      this.enforeBlacklist(newblacklist, identifier);
    } else if (identifier === "profile") {
      let newblacklist = [...this.state.blacklistProfiles];
      newblacklist.push(id);
      await this.setState({ blacklistProfiles: newblacklist });
      this.enforeBlacklist(newblacklist, identifier);
    }
  };

  enforeBlacklist = async (blacklist, identifier) => {
    let postArray = [...this.state.postArray];
    if (identifier === "post") {
      await this.state.postArray.map((post) => {
        if (blacklist.includes(post._id)) {
          postArray.splice(postArray.indexOf(post), 1);
        }
      });
    } else if (identifier === "profile") {
      await this.state.postArray.map((post) => {
        if (blacklist.includes(post.user._id)) {
          postArray.splice(postArray.indexOf(post), 1);
        }
      });
    }
    await this.setState({ postArray: postArray });
    this.fetchPosts();
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
              {this.state.postArray &&
                this.state.profiles &&
                !this.state.loading && (
                  <PostsColumn
                    user={this.props.user}
                    postArray={this.state.postArray}
                    profiles={this.state.profiles}
                    addToBlacklist={this.addToBlacklist}
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
