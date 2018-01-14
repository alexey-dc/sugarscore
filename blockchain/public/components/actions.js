export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_BORROW_REQUEST = 'RECEIVE_BORROW_REQUEST';
export const PAYBACK_LOAN = 'PAYBACK_LOAN';
export const RECEIVE_LOANS = 'RECEIVE_LOANS';

export const borrowRequest = (amount) => {
  return {
    type: RECEIVE_BORROW_REQUEST,
    payload: {
      amount: amount,
      days: 30
    }
  };
};
export const paybackLoan = (payload) => {
  return {
    type: PAYBACK_LOAN,
    payload
  };
};
export const loginUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};
export const receiveLoans = (loans) => {
  return {
    type: RECEIVE_LOANS,
    loans
  };
};

const postBorrowRequest = (data) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/borrow',
      data
    })
  );
};
const payBack = (data) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/',
      data
    })
  );
};
const fetchLoans = (address) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/getLoans?address=${address}`
    })
  );
};
const getProfile = (address) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/getProfile?address=${address}`
    })
  );
};

export const borrowRequestOnBlockchain = (data) => dispatch => (
  postBorrowRequest(data)
    .then(res => dispatch(borrowRequest(res)))
);

export const paybackLoanOnBlockchain = (data) => dispatch => (
  payBack(data)
    .then(res => dispatch(paybackLoan(res)))
);
export const getLoans = (data) => dispatch => (
  fetchLoans(data)
    .then(res => dispatch(receiveLoans(res)))
);
export const getProfileThunk = (address) => dispatch => (
  getProfile(address)
    .then(res => dispatch(loginUser(res)))
);


