import styled from 'styled-components';

interface ITypesProps {
  noValidate: boolean;
  autoComplete: 'off' | 'on';
  className: string;
  onSubmit: () => void;
}

const UpdateInfoStyled = styled.form<ITypesProps>`
  .profile__input {
    margin-bottom: 20px;
  }

  input {
    height: 64px;
  }
`;

export { UpdateInfoStyled };
