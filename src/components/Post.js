import React from "react";
import PropTypes from "prop-types"

function Post(props){
  console.log(props.post);
  return (  
  <React.Fragment>
    <div onClick={()=> props.whenPostClicked(props.id)}>
      <h3> 
        {props.name} - {props.date}
      </h3>
       <hr/>
       </div>
    </React.Fragment>
    );  
}
Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;




