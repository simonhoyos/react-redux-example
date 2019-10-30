import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
// export const POST_POSTS = 'POST_POSTS';

export function getPosts() {
  return function(dispatch) {
    return (
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          dispatch({
            type: GET_POSTS,
            payload: data,
          })
        })
    );
  }
}

// export function postPosts(dispatch) {
//   return function(postData) {
//     return (
//       axios.post('https://jsonplaceholder.typicode.com/posts', {
//         data: postData,
//         headers: {
//           'Authentication': 'dsfsdf-dfsenrjkebf-4hlejh348y'
//         }
//       })
//         .then(({ data }) => {
//           dispatch({
//             type: POST_POSTS,
//             payload: data
//           })
//         })
//     )
//   }
// }

const initialState = {
  posts: [],
};

export function postsReducer(state = initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    // case POST_POSTS:
    //   return {
    //     ...state,
    //     post: action.payload,
    //   }
    default:
      return state;
  }
}
