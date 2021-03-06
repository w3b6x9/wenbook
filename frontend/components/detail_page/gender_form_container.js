import { connect } from 'react-redux';
import { updateSingleUser } from '../../actions/user_actions';
import GenderForm from './gender_form';
import { closeForm } from '../../actions/form_actions';

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleUser: user => dispatch(updateSingleUser(user)),
    closeForm: form => () => dispatch(closeForm(form)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderForm);
