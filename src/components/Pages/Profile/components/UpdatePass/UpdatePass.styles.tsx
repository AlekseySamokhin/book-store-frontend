import styled from 'styled-components';

const laptopS = '@media(max-width: 941px)';

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
    color: #c30052;
    margin-bottom: 9px;
  }

  .primary-message {
    margin-bottom: 9px;
    color: #344966;
  }

  .profile__button {
    padding: 10px 50px;
  }

  ${laptopS} {
    .primary-message {
      font-size: 14px;
      line-height: 24px;
    }

    .error-message {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export { UpdatePassStyled };
