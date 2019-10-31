import React from 'react';
import App from './App';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

const mockStore = configureStore();

it('renders without crashing', () => {
  const increase = jest.fn();
  const decrease = jest.fn();
  const store = mockStore({ increase, decrease, countReducer: { count: 0 } });

  const wrapper = mount(<App store={store} />);

  expect(wrapper).toMatchSnapshot();
});
