import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSingleUser } from '../../actions/user_actions';
import { displayForm } from '../../actions/form_actions';
import ProfileAbout from './profile_about';
import { fetchAllFriends } from '../../actions/user_actions';

const mapStateToProps = ({user, session, form}, {match}) => {
  const userId = parseInt(match.params.userId);

  return {
    user,
    currentUser: session.currentUser,
    nameForm: form.nameForm,
    emailForm: form.emailForm,
    genderForm: form.genderForm,
    birthdayForm: form.birthdayForm,
    userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleUser: user => dispatch(updateSingleUser(user)),
    displayForm: form => () => dispatch(displayForm(form)),
    fetchAllFriends: userId => dispatch(fetchAllFriends(userId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAbout));
