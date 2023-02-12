import styled from 'styled-components';

const FavoritesStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 100px 0;

  .favorites__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 25px;
    text-align: center;
  }

  .favorites__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .favorites__empty {
   display: flex;
   flex-direction: column;
   align-items: center;
  }
`;

export { FavoritesStyled };
