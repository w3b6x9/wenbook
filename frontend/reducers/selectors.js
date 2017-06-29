import { values } from 'lodash';

export const valuesArray = data => {
  return values(data);
};

export const valuesArrayReverse = data => {
  return values(data).reverse();
};

export const yearsRange = () => {
  const range = [];

  for (let i = 2017; i >= 1905; i--) {
    range.push(i);
  }

  return range;
};
