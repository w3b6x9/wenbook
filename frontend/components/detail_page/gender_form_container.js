import { connect } from 'react-redux';
import { updateSingleUser } from '../../actions/user_actions';
import GenderForm from './gender_form';

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
)(GenderForm);
