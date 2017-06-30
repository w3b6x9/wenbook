export const DISPLAY_FORM = 'DISPLAY_FORM';
export const CLOSE_FORM = 'CLOSE_FORM';

export const displayForm = form => {
  return {
    type: DISPLAY_FORM,
    form: { [form]: true },
  };
};

export const closeForm = form => {
  return {
    type: CLOSE_FORM,
    form: { [form]: false },
  };
};
