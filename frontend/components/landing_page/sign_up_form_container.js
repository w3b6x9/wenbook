import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import { yearsRange } from '../../reducers/selectors';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errorsSignUp,
    years: yearsRange(),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
