import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm"

function NewPostForm(props) {
  
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      date: event.target.date.value,
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