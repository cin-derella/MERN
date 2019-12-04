import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log(`type/${type}/`);
  switch (type) {
    case SET_ALERT:
      console.log(`set alert/${payload}/`);
      return [...state, payload];
    case REMOVE_ALERT:
      console.log(`remove alert/${payload}/`);
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
