import type { ITypesDataBook } from '@/interfaces/bookInterfaces';

const getMinAndMaxValuePriceBooks = (array: ITypesDataBook[]) => {
  const objBookMaxPrice = array.reduce((acc, curr) => {
    return acc.price > curr.price ? acc : curr;
  });

  const objBookMinMinPrice = array.reduce((acc, curr) => {
    return acc.price < curr.price ? acc : curr;
  });

  return { minValue: objBookMinMinPrice.price, maxValue: objBookMaxPrice.price };
};

export { getMinAndMaxValuePriceBooks };
