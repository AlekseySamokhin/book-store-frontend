/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState, useRef, useEffect } from 'react';

import { SelectStyled } from './Select.styles';
import { icons } from '../../../assets';

interface ITypeProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const Select: React.FC<ITypeProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      return;
    }

    const handleClickOut = (event: MouseEvent) => {
      if (
        ref.current &&
        ref.current.contains(event.target as Node)
      ) {
        handleToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [ref, isOpen]);

  return (
    <SelectStyled isOpen={isOpen}>
      <div className="select__block" onClick={handleToggle}>
        <p className="select__title">{props.title}</p>

        <img
          className="select__icon"
          src={icons.forward}
          alt="Icons arrow back"
        />
      </div>

      <div ref={ref}>
        {isOpen && props.children}
      </div>
    </SelectStyled>
  );
};

export { Select };
