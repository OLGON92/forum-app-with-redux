import React from "react"; 
import PropTypes from "prop-types";

export default function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit = { props.formSubmissionHandler}>
        <input 
          type="text"
          name="name" 
          placeholder="Post Name" 
          required />
         <textarea 
          name="postContent" 
          placeholder="Share your thoughts" 
          required />
        
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};