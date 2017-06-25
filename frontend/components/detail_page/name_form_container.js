import { connect } from 'react-redux';
import { updateSingleUser } from '../../actions/user_actions';
import NameForm from './name_form';

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleUser: user => dispatch(updateSingleUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameForm);
