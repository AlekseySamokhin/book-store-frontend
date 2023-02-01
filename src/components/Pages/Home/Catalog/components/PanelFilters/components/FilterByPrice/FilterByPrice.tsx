/* eslint-disable no-console */
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import { useAppSelector } from '@/redux/store';
import { FilterByPriceStyled } from './FilterByPrice.styled';

import { getMinAndMaxValuePriceBooks } from '@/utils/getMinAndMaxNumber';

const FilterByPrice: React.FC = (): JSX.Element => {
  const books = useAppSelector((state) => state.store.books);

  const valuesPrice = useMemo(() => getMinAndMaxValuePriceBooks(books), []);

  const { minValue, maxValue } = valuesPrice;

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<number[]>([minValue, maxValue]);

  useEffect(() => {
    const minValuePrice = Number(searchParams.get('minPrice') || minValue);
    const maxValuePrice = Number(searchParams.get('maxPrice') || maxValue);

    setValue([minValuePrice, maxValuePrice]);
  }, []);

  const handleChangeValuePrice = (value: number[]) => {
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());

    if (value[0] === minValue && value[1] === maxValue) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
    }

    setSearchParams(searchParams);
  };

  const handleChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <FilterByPriceStyled>
      <ReactSlider
        value={value}
        min={minValue}
        max={maxValue}
        step={0.1}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={(value) => handleChange(value)}
        onAfterChange={(value) => handleChangeValuePrice(value)}
        renderThumb={(props) => <div {...props}></div>}
      />

      <div className="sort-by-price__values">
        <span>$ {value[0].toFixed(2)}</span>
        <span>$ {value[1].toFixed(2)}</span>
      </div>
    </FilterByPriceStyled>
  );
};

export { FilterByPrice };
