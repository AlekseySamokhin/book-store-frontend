import { useState, useRef, useEffect } from 'react';

import { icons } from '@/assets';

import { DropDownStyled } from './DropDown.styles';

interface ITypeProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const DropDown: React.FC<ITypeProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const refChildren = useRef<HTMLDivElement>(null);
  const refSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (
        refChildren.current &&
        !refChildren.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (
        refSelect.current &&
        refSelect.current?.contains(event.target as Node)
      ) {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('mousedown', handleClickOut);

    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [refChildren, refSelect, isOpen]);

  return (
    <DropDownStyled className={props.className} isOpen={isOpen}>
      <div ref={refSelect} className="select__block">
        <p className="select__title">{props.title}</p>

        <img
          className="select__icon"
          src={icons.forward}
          alt="icon back"
        />
      </div>

      <div ref={refChildren}>{isOpen && props.children}</div>
    </DropDownStyled>
  );
};

export { DropDown };
