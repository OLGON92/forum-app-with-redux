const postListReducer = (state = {}, action) => {
  const { name, date, postContent, likesGained, dislikesGained, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          date: date,
          postContent: postContent,
          likesGained: likesGained,
          dislikesGained: dislikesGained,
          id: id
        }
      });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};


export default postListReducer;