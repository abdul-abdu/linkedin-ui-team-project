import React from "react";
import IndividualPost from "./IndividualPost";

class PostsColumn extends React.Component {
  state = {
    postArray: [],
  };

  componentDidMount = () => {
    this.fetchPosts();
  };

  fetchPosts = async () => {
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
      this.setState({ postArray: parsedResponse });
    } catch (error) {
      console.log("uh oh stinky when fetching all the posts", error);
    }
  };

  render() {
    return (
      <>
        {this.state.postArray &&
          this.state.postArray.map((map, index) => (
            <IndividualPost post={map} key={index} />
          ))}
      </>
    );
  }
}

export default PostsColumn;
