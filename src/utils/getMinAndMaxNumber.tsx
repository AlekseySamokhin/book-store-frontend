import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

const getMinAndMaxValuePriceBooks = (array: ITypesDataBook[]) => {
  const objBookMaxPrice = array.reduce((acc, curr) => {
    return acc.price > curr.price ? acc : curr;
  });

  const objBookMinPrice = array.reduce((acc, curr) => {
    return acc.price < curr.price ? acc : curr;
  });

  return { minValue: objBookMinPrice.price, maxValue: objBookMaxPrice.price };
};

export { getMinAndMaxValuePriceBooks };
