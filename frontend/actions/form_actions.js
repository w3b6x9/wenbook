export const DISPLAY_FORM = 'DISPLAY_FORM';

export const displayForm = (form) => {
  return {
    type: DISPLAY_FORM,
    form: { [form]: true },
  };
};
