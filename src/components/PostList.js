import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  console.log(props);
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) =>
        <Post 
        whenPostClicked={ props.onPostSelection }
        whenLikeClicked={ props.onLikePost }
        whenDislikeClicked= { props.onDislikePost }
        name = {post.name}
        date = {post.date}
        postContent = {post.postContent}
        likesGained = {post.likesGained}
        dislikesGained = {post.dislikesGained}
        id = {post.id}
        key = {post.id} />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList; 