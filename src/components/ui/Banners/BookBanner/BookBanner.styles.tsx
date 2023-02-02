import styled from 'styled-components';

const BookBannerStyled = styled.div`
  position: relative;
  background-color: #f0f4ef;
  border-radius: 16px;
  padding: 80px 0 96px 108px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .book-banner__title {
    color: #0d1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .book-banner__description {
    color: #344966;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 50px;
  }

  .book-banner__image {
    position: absolute;
    bottom: 0;
    right: 98px;
  }

  .book-banner__image-background {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  @media (max-width: 1100px) {
    padding: 0 14px 0 40px;
  }
`;

export { BookBannerStyled };
