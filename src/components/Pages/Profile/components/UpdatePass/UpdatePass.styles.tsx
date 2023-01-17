import styled from 'styled-components';

interface ITypesProps {
  noValidate: boolean;
  autoComplete: 'off' | 'on';
  className: string;
  onSubmit: () => void;
}

const UpdatePassStyled = styled.form<ITypesProps>`
  .profile__input-first {
    margin-bottom: 20px;
  }

  input {
    height: 64px;
  }

  .profile__input {
    margin-bottom: 10px;
  }

  .error-message {
    color: #C30052;
    margin-bottom: 9px;
  }

  .primary-message {
    margin-bottom: 9px;
  }
`;

export { UpdatePassStyled };
