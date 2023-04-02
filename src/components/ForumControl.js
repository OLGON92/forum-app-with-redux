import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from './EditPostForm';


class ForumControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainPostList: [],
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList, formVisibleOnPage: false}, () => {
      console.log(this.state.mainPostList); // check if the new post is added to the list
    });
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
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({ selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true});
  };

  handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList
      .filter(post => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
      mainPostList: editedMainPostList,
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
            postList={this.state.mainPostList}
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

export default ForumControl;