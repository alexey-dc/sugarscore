const initialState = {hellos: {}};
import merge from 'lodash/merge'

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "RECEIVE_HELLO":
      // debugger
      return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default reducer;
