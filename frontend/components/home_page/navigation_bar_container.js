import { connect } from 'react-redux';
import MenuDropdownContainer from './menu_dropdown_container';
import { displayDropdown } from '../../actions/dropdown_actions';
import NavigationBar from './navigation_bar';

const mapStateToProps = state => {
  return {
    visible: Boolean(state.dropdown.menu),
    menu: MenuDropdownContainer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayDropdown: () => dispatch(displayDropdown({ menu: true })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
