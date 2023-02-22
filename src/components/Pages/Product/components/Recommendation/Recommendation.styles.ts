import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const ReccommendationStyled = styled.div`
  margin: 50px 0 60px 0;

  .reccommendations__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 50px;
  }

  .reccommendations__list {
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;
    overflow: hidden;
    gap: 20px;
    margin-bottom: 83px;
  }

  ${tablet} {
    .reccommendations__title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 20px;
    }
  }
`;

export { ReccommendationStyled };
