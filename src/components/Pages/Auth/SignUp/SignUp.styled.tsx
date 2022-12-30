import styled from 'styled-components';

export const SignUpStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-bottom: 30px;

  .block-form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h2 {
      font-size: 40px;
      font-weight: 700;
      color: #0d1821;
      padding-bottom: 60px;
    }

    label {
      display: block;
      margin-top: 30px;
    }

    label p {
      padding-top: 9px;
    }


    .form__button {
      margin-top: 60px;
    }
  }

  @media (max-width: 1100px) {
    padding-top: 60px;
  }
`;
