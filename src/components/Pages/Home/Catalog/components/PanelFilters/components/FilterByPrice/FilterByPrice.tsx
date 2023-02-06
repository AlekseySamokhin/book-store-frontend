import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import { FilterByPriceStyled } from './FilterByPrice.styled';

const FilterByPrice: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number[]>([0, 100]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const minValuePrice = Number(searchParams.get('minPrice') || value[0]);
    const maxValuePrice = Number(searchParams.get('maxPrice') || value[1]);

    setValue([minValuePrice, maxValuePrice]);
  }, []);

  const handleChangeValuePrice = (value: number[]) => {
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());

    if (value[0] === 0 && value[1] === 100) {
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
        min={0}
        max={100}
        step={0.1}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={handleChange}
        onAfterChange={handleChangeValuePrice}
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
