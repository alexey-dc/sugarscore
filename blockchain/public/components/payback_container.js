import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Payback from './payback';
import { getLoans, paybackLoanOnBlockchain } from './actions';

const mapStateToProps = (state, ownProps) => {
  let loans = state.loans;
  let user = state.currentUser;
  // getLoans(user.address);
  return {
    user,
    loans
  };
};
const mapDispatchToProps = dispatch => ({
  getloans: (address) => dispatch(getLoans(address)),
  payback: (address, loanId) => dispatch(paybackLoanOnBlockchain(loanId))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Payback));
