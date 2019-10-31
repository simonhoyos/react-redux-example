export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function increase() {
  return function(dispatch) {
    return dispatch({
      type: INCREASE,
    });
  }
}

export function decrease() {
// export function decrease(count) {
  return function(dispatch) {
    return dispatch({
      type: DECREASE,
      // payload: count
    });
  }
}

export const initialState = {
  count: 0,
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
}

// event (click, change, submit) => action (redux) => reducer => store
