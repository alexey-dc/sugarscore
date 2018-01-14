import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash';
import { loginUser } from './actions';
import values from 'lodash/values';
const mapStateToProps = (state, ownProps) => {
  let test = 'A User';
  return {
    ownProps,
    user: test
    // user: values(state.user)
  };
};
const mapDispatchToProps = dispatch => {
  return {
  // getUser: () => dispatch(getEvents())
  login: (user) => dispatch(loginUser(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Splash));
