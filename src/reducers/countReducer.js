export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

const initialState = {
  count: 0,
};

export function countReducer(state = initialState, action) {
  console.log({ state, action });
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