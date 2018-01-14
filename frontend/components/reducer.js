import { 
  RECEIVE_HELLO, 
  RECEIVE_BORROW_REQUEST,
  PAYBACK_LOAN
} from './actions';
import merge from 'lodash/merge';

//pass loan due date as UNIX time (Date.now())

const initialState = {
  loanRequests: {
    '0': {'amount': 500, 'interest': 0.05, 'due': 1515892648090}
  }
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BORROW_REQUEST:
      let newLoan = action.payload;
      newState = merge({}, state.loanRequests, newLoan);
      return newState;
    case PAYBACK_LOAN:
      newState = Object.assign({}, state); 
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default reducer;
