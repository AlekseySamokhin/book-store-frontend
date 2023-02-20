import styled from 'styled-components';

const tablet = '@media(max-width: 834px)';

const DescriptionStyled = styled.div`
  .description__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }

  .description__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.dark_blue};
  }

  ${tablet} {
    .description__title {
      font-size: 16px;
      line-height: 24px;
    }

    .description__text {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export { DescriptionStyled };
