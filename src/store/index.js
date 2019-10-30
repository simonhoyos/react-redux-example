import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from '../reducers/countReducer';
import { postsReducer } from '../reducers/postsReducer';

function logger(store) {
  return function(next) {
    return function dispatchAndLog(action) {
      // puedes implementar tu logica
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    }
  }
}

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const middlewares = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, middlewares);

// store = {
//   countReducer: {
//     count: 0,
//   },
//   inputReducer: {
//     input: '',
//   }
// }

// export const store = createStore(countReducer);

// store = {
//   count: 0
// }
