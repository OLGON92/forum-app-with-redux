import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

export default function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      name: event.target.name.value,
      postContent: event.target.postContent.value,
      likesGained: post.likesGained,
      dislikesGained: post.dislikesGained,
      id: post.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
}