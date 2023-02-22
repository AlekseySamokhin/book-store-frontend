import styled from 'styled-components';

interface ITypeProps {
  noValidate: boolean;
  autoComplete: 'off' | 'on';
  className: string;
  onSubmit: () => void;
}

const UpdateInfoStyled = styled.form<ITypeProps>`
  .profile__input {
    margin-bottom: 20px;
  }

  .profile__text {
    h3 {
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
    }

    p {
      text-decoration: underline;
      color: #8d9f4f;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .profile__button {
    padding: 10px 50px;
  }
`;

export { UpdateInfoStyled };
