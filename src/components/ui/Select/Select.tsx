/* eslint-disable no-console */
import { useState } from 'react';

import { SelectStyled } from './Select.styles';
import { icons } from '../../../assets';

interface ITypeProps {
  title: string;
}

const Select: React.FC<ITypeProps> = (props: ITypeProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectStyled isOpen={isOpen} onClick={handleToggle}>
      <p className="custom-select__title">{props.title}</p>
      <img
        className="custom-select__icons"
        src={icons.forward}
        alt="Icons arrow"
      />
    </SelectStyled>
  );
};

export { Select };
