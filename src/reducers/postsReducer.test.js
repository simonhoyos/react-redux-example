import { postsReducer, initialState, GET_POSTS, POST_POSTS, getPosts, postPosts } from './postsReducer';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const posts = [
  { id: 0, title: 'first title' },
  { id: 1, title: 'second title'}
];

describe('postsReducer', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('should return initial state by default', () => {
    const state = postsReducer(undefined, { type: 'invalid' });

    expect(state).toMatchObject(initialState);
  });

  it('should return a new state with a list of posts', () => {
    const state = postsReducer(undefined, { type: GET_POSTS, payload: posts });
    expect(state.posts).toMatchObject(posts);
  });

  it('should request posts and return an action with those posts', () => {
    moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
      status: 200,
      response: posts
    });

    const store = mockStore();
    const dispatch = store.dispatch;

    return (
      getPosts()(dispatch)
        .then(() => {
          const actions = store.getActions();
          // console.log(actions[0].payload[0].title)
          expect(actions[0].type).toBe(GET_POSTS);
          expect(actions[0].payload).toMatchObject(posts);
        })
    );
  });

  // it('should request posts and return an action with those posts', () => {
  //   const post = { id: 1, title: 'mock post' };
  //   moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
  //     status: 200,
  //     response: post
  //   });

  //   const store = mockStore();
  //   const dispatch = store.dispatch;

  //   return (
  //     postPosts(post)(dispatch)
  //       .then(() => {
  //         const actions = store.getActions();
  //         expect(actions[0].type).toBe(POST_POSTS);
  //         expect(actions[0].payload).toMatchObject(post);
  //       })
  //   );
  // });
});
