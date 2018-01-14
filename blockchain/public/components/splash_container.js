import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash';
import { borrowMoney } from './actions';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  let test = 'A User';
  return {
    ownProps,
    user: test
    // user: values(state.user)
  };
};
const mapDispatchToProps = dispatch => ({
  // getUser: () => dispatch(getEvents())
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Splash));
