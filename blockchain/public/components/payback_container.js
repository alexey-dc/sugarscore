import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Payback from './payback';


const mapStateToProps = (state, ownProps) => {
  let loans = ['loan1', 'loan2', 'loan3'];
  return {
    loans
  };
};
const mapDispatchToProps = dispatch => ({
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Payback));
