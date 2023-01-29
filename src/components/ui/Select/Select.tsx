/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState, useRef, useEffect } from 'react';

import { SelectStyled } from './Select.styles';
import { icons } from '@/assets';

interface ITypeProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const Select: React.FC<ITypeProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refChildren = useRef<HTMLDivElement>(null);
  const refSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (refChildren.current && !refChildren.current.contains(event.target as Node)) {
        setIsOpen(false);
      }

      if (refSelect.current && refSelect.current?.contains(event.target as Node)) {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [refChildren, refSelect, isOpen]);

  return (
    <SelectStyled isOpen={isOpen}>
      <div ref={refSelect} className="select__block">
        <p className="select__title">{props.title}</p>

        <img
          className="select__icon"
          src={icons.forward}
          alt="Icons arrow back"
        />
      </div>

      <div ref={refChildren}>{isOpen && props.children}</div>
    </SelectStyled>
  );
};

export { Select };
