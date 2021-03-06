import { connect } from 'react-redux';
import { updateSingleUser } from '../../actions/user_actions';
import BirthdayForm from './birthday_form';
import { yearsRange } from '../../reducers/selectors';
import { closeForm } from '../../actions/form_actions';

const mapStateToProps = ({user}) => {
  return {
    user,
    years: yearsRange(),
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
)(BirthdayForm);
