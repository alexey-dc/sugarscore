import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Payback from './payback';
import { paybackLoan } from './actions';

const mapStateToProps = (state, ownProps) => {
  let loans = ['loan1', 'loan2', 'loan3'];
  return {
    loans
  };
};
const mapDispatchToProps = dispatch => ({
  payback: (loanId) => dispatch(paybackLoan(loanId))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Payback));
