import React from "react"; 
import PropTypes from "prop-types";

export default function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit = { props.formSubmissionHandler}>
        <input 
          type="text"
          name="name" 
          placeholder="Post Name" />
        <input
          type='date'
          name='date' />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};