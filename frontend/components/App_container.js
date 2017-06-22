import { connect } from 'react-redux';
import App from './App';
import { clearDropdown } from '../actions/dropdown_actions';

const mapDispatchToProps = dispatch => {
  return {
    clearDropdown: () => dispatch(clearDropdown()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
