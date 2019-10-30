import { createStore, combineReducers } from 'redux';
import { countReducer } from '../reducers/countReducer';
import { inputReducer } from '../reducers/inputReducer';

const rootReducer = combineReducers({
  countReducer,
  inputReducer,
});

export const store = createStore(rootReducer);

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
