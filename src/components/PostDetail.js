import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post } = props;
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>
        {post.name} - {post.date}
      </h3>
      <h3>Post Content: {post.postContent}</h3>
      <h2>Likes: {post.likesGained}</h2>
      <h2>Dislikes: {post.dislikesGained}</h2>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <button onClick={() => props.onClickingDelete(post.id)}>Delete Post</button>
    </React.Fragment>
);
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default PostDetail;