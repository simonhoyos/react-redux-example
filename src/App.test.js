import React from 'react';
import App from './App';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

it('renders without crashing', () => {
  const increase = jest.fn();
  const decrease = jest.fn();
  const getPosts = jest.fn();
  const store = mockStore({
    increase,
    decrease,
    getPosts,
    countReducer: { count: 0 },
    postsReducer: { posts: []}
  });

  const wrapper = mount(
    <Provider store={store}>
      <App store={store} />
    </Provider>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
