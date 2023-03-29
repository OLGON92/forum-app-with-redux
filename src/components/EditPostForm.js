import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

export default function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      name: event.target.post.value,
      date: event.target.date.value, 
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