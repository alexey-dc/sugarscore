import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Borrow from './borrow';
import { borrowMoney } from './actions';

const mapStateToProps = (state, ownProps) => {
  let test = '103';
  return {
    borrow_amount: test
  };
};
const mapDispatchToProps = dispatch => ({
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Borrow));