import { connect } from 'react-redux';
import MenuDropdownContainer from './menu_dropdown_container';
import { displayDropdown, clearDropdown } from '../../actions/dropdown_actions';
import { signOut } from '../../actions/session_actions';
import NavigationBar from './navigation_bar';

const mapStateToProps = state => {
  return {
    visible: Boolean(state.dropdown.menu),
    menu: MenuDropdownContainer,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayDropdown: () => dispatch(displayDropdown({ menu: true })),
    clearDropdown: () => dispatch(clearDropdown()),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
