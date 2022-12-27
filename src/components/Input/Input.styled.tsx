import styled from 'styled-components';

const Input = styled.div`
  display: flex;
  background-color: #f0f4ef;
  border-radius: 16px;
  align-items: center;
  max-width: 630px;
  width: 100%;

  .search__input {
    background-color: #f0f4ef;
    width: inherit;
    border: none;
    padding: 20px 0 20px 14px;
    font-weight: 400;
    border-radius: 16px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    outline: none;
  }

  .search__icon {
    padding: 20px 0px 20px 26px;
  }

  @media (max-width: 1130px) {
    max-width: 450px;
    width: 100%;

    .search__input {
      max-width: 290px;
      width: 100%;
      order: 1;
    }
    .search__icon {
      padding: 14px 18px 15px 20px;
    }
  }

  @media (max-width: 970px) {
    max-width: 350px;
    width: 100%;

    .search__input {
      max-width: 290px;
      width: 100%;
      order: 1;
    }
  }

  @media (max-width: 833px) {
    width: 100%;

    .search__input {
      width: 100%;
      order: 1;
    }
  }

  @media only screen and (max-width: 680px) {
    margin-top: 17px;

    max-width: 100%;

    .search__input {
      font-size: 12px;
      padding: 12.5px 0 12.5px 15px;
      order: 1;
    }

    .search__icon {
      padding: 14px 0 15px 20px;
    }
  }
`;

export default Input;
