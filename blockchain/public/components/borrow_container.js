import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Borrow from './borrow';
import { borrowRequestOnBlockchain } from './actions';

const mapStateToProps = (state, ownProps) => {
  let user = state.currentUser;
  let creditScore = state.creditScore;
  return {
    user, 
    creditScore
  };
};
const mapDispatchToProps = dispatch => ({
  newLoan: (loan) => dispatch(borrowRequestOnBlockchain(loan))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Borrow));
