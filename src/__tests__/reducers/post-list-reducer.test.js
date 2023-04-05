import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    name: 'Ryan',
    date: '04/04/2023',
    postContent: 'Redux action is not working correctly.',
    likesGained: 1,
    dislikesGained: 2,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { name, date, postContent, likesGained, dislikesGained, id } = postData;
    action = {
      type: 'ADD_POST',
      name: name,
      date: date,
      postContent: postContent,
      likesGained: likesGained,
      dislikesGained: dislikesGained,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        date: date,
        postContent: postContent,
        likesGained: likesGained,
        dislikesGained: dislikesGained,
        id: id
      }
    });
  });

});