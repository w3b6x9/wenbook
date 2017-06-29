import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSingleUser } from '../../actions/user_actions';
import { displayForm } from '../../actions/form_actions';
import ProfileAbout from './profile_about';

const mapStateToProps = ({user, session, form}) => {
  return {
    user,
    currentUser: session.currentUser,
    nameForm: form.nameForm,
    emailForm: form.emailForm,
    genderForm: form.genderForm,
    birthdayForm: form.birthdayForm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleUser: user => dispatch(updateSingleUser(user)),
    displayForm: form => () => dispatch(displayForm(form)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAbout));
