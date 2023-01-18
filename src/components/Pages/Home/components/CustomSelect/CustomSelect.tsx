/* eslint-disable no-console */
import { useState } from 'react';

import { CustomSelectStyled } from './CustomSelect.styles';
import { icons } from '../../../../../assets';

interface ITypeProps {
  title: string;
}

const CustomSelect: React.FC<ITypeProps> = (props: ITypeProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomSelectStyled isOpen={isOpen} onClick={handleToggle}>
      <p className="custom-select__title">{props.title}</p>
      <img
        className="custom-select__icons"
        src={icons.forward}
        alt="Icons arrow"
      />
    </CustomSelectStyled>
  );
};

export { CustomSelect };
