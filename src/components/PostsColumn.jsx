import React from "react";
import IndividualPost from "./IndividualPost";

class PostsColumn extends React.Component {
  render() {
    return (
      <>
        {this.props.postArray.map((singlePost, index) => (
          <IndividualPost post={singlePost} key={index} />
        ))}
      </>
    );
  }
}

export default PostsColumn;
