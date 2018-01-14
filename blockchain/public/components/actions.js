export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_BORROW_REQUEST = 'RECEIVE_BORROW_REQUEST';
export const PAYBACK_LOAN = 'PAYBACK_LOAN';

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
export const loginUser = (user) => {
  return {
    type: "RECEIVE_USER",
    user
  };
};
