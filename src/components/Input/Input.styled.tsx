import styled from 'styled-components';

const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 630px;
  background-color: #f0f4ef;
  font-weight: 400;
  border-radius: 16px;

  input {
    width: 100%;
    padding: 20px 14px 20px 14px;
    background-color: #f0f4ef;
    font-size: 16px;
    letter-spacing: 1.5px;
    line-height: 24px;
    border-radius: 16px;
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

export default Input;
