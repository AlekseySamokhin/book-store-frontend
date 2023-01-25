/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState, useRef, useEffect } from 'react';

import { SelectStyled } from './Select.styles';
import { icons } from '../../../assets';

interface ITypeProps {
  title: string;
  children?: React.ReactNode;
}

const Select: React.FC<ITypeProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  console.log(selectRef.current);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        selectRef.current.contains(event.target as Node)
      ) {
        handleToggle();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef, isOpen]);

  return (
    <SelectStyled isOpen={isOpen}>
      <div onClick={handleToggle}>
        <p className="select__title">{props.title}</p>

        <img
          className="select__icon"
          src={icons.forward}
          alt="Icons arrow back"
        />
      </div>

      <div ref={selectRef}>{isOpen && props.children}</div>
    </SelectStyled>
  );
};

export { Select };
