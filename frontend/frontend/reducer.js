const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "RECEIVE_HELLO":
      return {
        payload: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
