import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import MenuDropdown from './menu_dropdown';

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MenuDropdown);
