import styled from 'styled-components';

const tabletM = '@media (max-width: 650px)';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  padding: 24px 0 24px 0;

  margin-bottom: 16px;

  .header__input {
    max-width: 630px;
  }

  .header__title {
    font-size: 16px;
    font-weight: 500;
  }

  ${tabletM} {
    flex-wrap: wrap;
    gap: 7px;

    padding-top: 33px;

    .header__input {
      margin-top: 20px;
      order: 2;
    }
  }
`;

export { HeaderStyled };
