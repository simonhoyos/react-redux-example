import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Posts from './Posts';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const posts = [
  { id: 0, title: 'first title' },
  { id: 1, title: 'second title'}
];

describe('<Posts />', () => {
  it('should render a list of posts', () => {
    const getPosts = jest.fn();
    const store = mockStore({ getPosts, postsReducer: { posts } });

    const wrapper = mount(<Posts store={store} />);

    expect(wrapper.find('li')).toHaveLength(2);
  });
});
