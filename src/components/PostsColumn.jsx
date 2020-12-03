import React from "react";
import IndividualPost from "./IndividualPost";

class PostsColumn extends React.Component {
  render() {
    return (
      <>
        {this.props.postArray.map((singlePost, index) => (
          <IndividualPost
            user={this.props.user}
            post={singlePost}
            key={index}
            fetchPosts={this.props.fetchPosts}
          />
        ))}
      </>
    );
  }
}

export default PostsColumn;
