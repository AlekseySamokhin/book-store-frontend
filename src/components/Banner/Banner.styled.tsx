import styled from 'styled-components';

const BannerStyled = styled.div`
  background-color: #f0f4ef;
  border-radius: 16px;
  margin-bottom: 60px;
  padding: 0 98px 0 108px;

  h1 {
    color: #0d1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-top: 80px;
  }

  p {
    color: #344966;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-top: 10px;
  }

  .banner__bottom {
    align-self: flex-start;
    margin-top: 60px;
  }

  .img {
  }

  @media (max-width: 1100px) {
    padding: 0 14px 0 40px;
  }
`;

export { BannerStyled };
