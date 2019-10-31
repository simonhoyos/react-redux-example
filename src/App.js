import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './reducers/countReducer';
import Posts from './components/Posts';
import './App.css';

function App({ count, increase, decrease }) {
  return (
    <div className="App">
      <button onClick={decrease}>Decrease</button>
      <span>{count}</span>
      <button onClick={increase}>Increase</button>
      <Posts />
    </div>
  );
}

const mapStateToProps = ({ countReducer }) => {
  return {
    count: countReducer.count,
  }
};

const mapDispatchToProps = {
  increase,
  decrease,
};

// const Something = connect(mapStateToProps, mapDispatchToProps);
// const Component = Something(App);
// <Component />

export default connect(mapStateToProps, mapDispatchToProps)(App);
