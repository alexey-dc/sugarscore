export const RECEIVE_HELLO = 'RECEIVE_HELLO';
export const RECEIVE_BORROW_REQUEST = 'RECEIVE_BORROW_REQUEST';
export const PAYBACK_LOAN = 'PAYBACK_LOAN';

export const testAction = (payload) => {
  return {
    type: "RECEIVE_HELLO",
    hellos: payload
  };
};
export const borrowRequest = (payload) => {
  return {
    type: "BORROW_REQUEST",
    payload
  };
};
export const paybackLoan = (payload) => {
  return {
    type: "PAYBACK_LOAN",
    payload
  };
};
