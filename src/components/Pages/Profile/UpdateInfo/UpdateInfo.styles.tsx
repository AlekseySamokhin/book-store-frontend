import styled from 'styled-components';

interface ITypesProps {
  noValidate: boolean;
  autoComplete: 'off' | 'on';
  className: string;
  onSubmit: () => void;
}

const UpdateInfoStyled = styled.form<ITypesProps>``;

export { UpdateInfoStyled };
