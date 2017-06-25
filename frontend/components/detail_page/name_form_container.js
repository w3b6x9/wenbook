import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  updateSingleUser,
  requestSingleUser,
} from '../../actions/user_actions';
import NameForm from './name_form';

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleUser: user => dispatch(updateSingleUser(user)),
    requestSingleUser: userId => dispatch(requestSingleUser(userId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NameForm));
