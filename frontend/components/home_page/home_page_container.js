import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import HomePage from './home_page';

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
