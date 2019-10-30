import React from 'react';
import { connect } from 'react-redux';
import { INCREASE, DECREASE } from './reducers/countReducer';
import Posts from './components/Posts';
import './App.css';

function App({ count, increase, decrease }) {
  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <span>{count}</span>
      <button onClick={decrease}>Decrease</button>
      <Posts />
    </div>
  );
}

const mapStateToProps = ({ countReducer }) => {
  return {
    count: countReducer.count,
  }
};

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch({ type: INCREASE }),
  decrease: () => dispatch({ type: DECREASE }),
});

// const Something = connect(mapStateToProps, mapDispatchToProps);
// const Component = Something(App);
// <Component />

export default connect(mapStateToProps, mapDispatchToProps)(App);


// HOC o HOF = High Order Comoponent o Function
// function connect(mapStateToProps = {}, mapDispatchToProps = {}) {
//   la funcionalidad que queria reutilizar

//   return function Something(Component) {
//     return (
//       <Component {...mapStateToProps} {...mapDispatchToProps} >
//         {children}
//       </Component>
//     )
//   }
// }
