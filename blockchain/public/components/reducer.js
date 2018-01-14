import { 
  RECEIVE_HELLO, 
  RECEIVE_BORROW_REQUEST,
  PAYBACK_LOAN
} from './actions';
import merge from 'lodash/merge';

//pass loan due date as UNIX time (Date.now())

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BORROW_REQUEST:
      newState = Object.assign({}, state); 
      let amount = action.payload.amount;
      let days = action.payload.days;
      //we need to find a new id for this 
      let newId = 0;
      while (true) {
        if (!state.loans[newId]) {
          break; 
        }
        else {
          newId += 1;
        }
      }
      let newLoan = {
        loanId: newId, 
        paybackAmount: amount,
        days: days
      };
      // debugger
      newState.loans.push(newLoan);
      return newState;
    case PAYBACK_LOAN:
      newState = Object.assign({}, state); 
      let loans = newState.loans;
      let result = [];
      //REALLY slow. In future receive hash of loans instead of array
      for(let i = 0; i < loans.length; i++) {
        if (loans[i].loanId !== action.payload)
          result.push(loans[i]);
      }
      newState.loans = result;
      // delete newState.loans[action.payload];
      return newState;
    default:
      return state;
  }
};

export default reducer;
