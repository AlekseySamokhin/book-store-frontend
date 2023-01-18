import { CustomSelectStyled } from './CustomSelect.styles';
import { icons } from '../../../../../assets';

interface ITypeProps {
  title: string;
}

const CustomSelect: React.FC<ITypeProps> = (props: ITypeProps): JSX.Element => {
  return (
    <CustomSelectStyled>
      <p className='custom-select__title'>{props.title}</p>
      <img className='custom-select__icons' src={icons.forward} alt="Icons arrow" />
    </CustomSelectStyled>
  );
};

export { CustomSelect };
