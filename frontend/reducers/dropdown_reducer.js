import {
  DISPLAY_DROPDOWN,
  CLEAR_DROPDOWN
} from '../actions/dropdown_actions';

const DropdownReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DISPLAY_DROPDOWN:
      return action.menu;
    case CLEAR_DROPDOWN:
      return {};
    default:
      return state;
  }
};

export default DropdownReducer;
