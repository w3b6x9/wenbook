import { connect } from 'react-redux';
import { signIn } from '../../actions/session_actions';
import SignInForm from './sign_in_form';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(signIn(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
