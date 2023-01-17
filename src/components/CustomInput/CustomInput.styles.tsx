import styled from 'styled-components';

interface ITypesProps {
  error?: string;
  touched?: boolean;
}

const CustomInputStyled = styled.div<ITypesProps>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 630px;
  cursor: pointer;

  font-weight: 400;
  border-radius: 16px;

  border: ${(props) => (props.error && props.touched ? '2px solid #ED2E7E' : '')};
  background-color: ${(props) => (props.error && props.touched ? props.theme.colors.error : props.theme.colors.light)};

  input {
    width: 100%;
    padding: ${(props) => (props.error && props.touched ? '18px 14px 18px 14px' : '20px 14px 20px 14px')};
    background-color: ${(props) => (props.error && props.touched ? props.theme.colors.error : props.theme.colors.light)};
    font-size: 16px;
    letter-spacing: 1.5px;
    line-height: 24px;
    border-radius: 16px;
    cursor: pointer;
  }

  img {
    padding: 20px 0px 20px 26px;
  }

  @media (max-width: 1130px) {
    max-width: 450px;
  }

  @media (max-width: 970px) {
    max-width: 300px;
  }

  @media (max-width: 850px) {
    max-width: 247px;
  }

  @media (max-width: 680px) {
    margin-top: 17px;
    width: 100%;
    max-width: 100%;

    input {
      max-width: 100%;
      font-size: 12px;
      line-height: 28px;
      padding: 10px 14px 9px 14px;
    }

    img {
      padding: 11.5px 0px 11.5px 26px;
    }
  }
`;

export { CustomInputStyled };
