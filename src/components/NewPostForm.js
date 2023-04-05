import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm"

function NewPostForm(props) {
  
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    console.log("new post button pressed");
    props.onNewPostCreation({
      name: event.target.name.value,
      postContent: event.target.postContent.value,
      date: null,
      likesGained: parseInt(0),
      dislikesGained: parseInt(0),
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewPostFormSubmission}
      buttonText="Add New Post"
      />
      </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPostForm;