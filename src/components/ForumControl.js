import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class ForumControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { name, date, postContent, likesGained, dislikesGained, id } = newPost;
    const action = {
      type: "ADD_POST",
      name: name,
      date: date,
      postContent: postContent,
      likesGained: likesGained,
      dislikesGained: dislikesGained,
      id: id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }
  handleClick = () => {
    if(this.state.selectedPost != null ){
      this.setState({
        formVisibleOnPage : false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({ selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditClick = () => {
    this.setState({ editing: true});
  };

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { name, date, postContent, likesGained, dislikesGained, id } = postToEdit;
    const action = {
      type: "ADD_POST",
      name: name,
      date: date,
      postContent: postContent,
      likesGained: likesGained,
      dislikesGained: dislikesGained,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleDislikePost = (id) => {
    const newPostList = this.state.mainPostList.map(post => {
      if(post.id === id) {
        const newDislikes = post.dislikesGained - 1;
        return { ...post, dislikesGained: newDislikes};
      }
      return post;
    });
    this.setState({
      mainPostList: newPostList
    });
  }

  handleLikePost = (id) => {
    const newPostList = this.state.mainPostList.map(post => {
      if(post.id === id) {
        const newLikes = post.likesGained + 1;
        return { ...post, likesGained: newLikes};
      }
      return post;
    });
    this.setState({
      mainPostList: newPostList
    });
  }
    render() {
      let currentlyVisibleState = null;
      let buttonText = null;

      if (this.state.editing){
        currentlyVisibleState =
          <EditPostForm 
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList} />
          buttonText = "Return to Forum List";
      }
        else if (this.state.selectedPost != null){
        currentlyVisibleState =
          <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick}
          />
          buttonText = "Return to Form List";
      } 
        else if (this.state.formVisibleOnPage){
        currentlyVisibleState =
          <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
          buttonText = "Return to Forum List";
        } else {
          currentlyVisibleState =
            <PostList
            postList={this.props.mainPostList}
            onPostSelection={this.handleChangingSelectedPost}
            onLikePost = { this.handleLikePost}
            onDislikePost = { this.handleDislikePost}
            />
            buttonText = " Add Post";
        }
      

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> 
        </React.Fragment>
      );
    } 
  }

  ForumControl.propTypes = {
    mainPostList: PropTypes.object,
  };
  
  const mapStateToProps = (state) => {
    return{
      mainPostList: state
    }
  }

  ForumControl = connect(mapStateToProps)(ForumControl);

            
export default ForumControl;