import { DISPLAY_FORM } from '../actions/form_actions';

const FormReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DISPLAY_FORM:
      return Object.assign({}, state, action.form);
    default:
      return state;
  }
};

export default FormReducer;
