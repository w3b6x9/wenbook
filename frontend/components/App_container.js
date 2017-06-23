import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
import { clearDropdown } from '../actions/dropdown_actions';

const mapDispatchToProps = dispatch => {
  return {
    clearDropdown: () => dispatch(clearDropdown()),
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));
