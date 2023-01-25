/* eslint-disable no-console */
import { useState } from 'react';

import { SelectStyled } from './Select.styles';
import { icons } from '../../../assets';

interface ITypeProps {
  title: string;
  children?: React.ReactNode;
}

const Select: React.FC<ITypeProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectStyled isOpen={isOpen} onClick={handleToggle}>
      <p className="select__title">{props.title}</p>

      <img
        className="select__icon"
        src={icons.forward}
        alt="Icons arrow back"
      />

      {isOpen && props.children}
    </SelectStyled>
  );
};

export { Select };
