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
      <h3>Post Content: {props.postContent}</h3>
      <br/>
      <h2>Likes: {props.likesGained}</h2>
      <h2>Dislikes: {props.dislikesGained}</h2>
    </div>
    <button onClick={()=> props.whenLikeClicked(props.id) }>Like</button>
    <button onClick={()=> props.whenDislikeClicked(props.id)}>Dislike</button>
    </React.Fragment>);
      



}
Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  postContent: PropTypes.string,
  likesGained: PropTypes.number,
  dislikesGained: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  whenLikeClicked: PropTypes.func,
  whenDislikeClicked: PropTypes.func
};

export default Post;




