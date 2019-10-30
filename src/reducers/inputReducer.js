export const CHANGE_INPUT = 'CHANGE_INPUT';

const initialState = {
  input: '',
};

// action = { type, payload }
export function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload
      }
    default:
      return state;
  }
}
