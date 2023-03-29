import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>
        {post.name} - {post.date}
        </h3>
        <button onClick={props.onClickingEdit}>Update Post</button>
        <button onClick={() => props.onClickingDelete(post.id)}>Close Post</button>
    </React.Fragment>
);
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default PostDetail;