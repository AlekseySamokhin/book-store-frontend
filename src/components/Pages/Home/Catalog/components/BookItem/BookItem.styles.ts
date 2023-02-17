import styled from 'styled-components';

interface ITypeProps {
  like: boolean;
}

const tablet = '@media(max-width: 834px)';
const mobile = '@media(max-width: 470px)';

const BookItemStyled = styled.div<ITypeProps>`
  display: flex;
  flex-direction: column;
  width: calc((100% - (20px * 3)) / 4);
  max-width: 305px;
  height: 100%;
  max-height: 663px;
  font-weight: 500;
  font-size: 20px;

  .book-item__poster {
    position: relative;

    margin-bottom: 30px;
    width: 100%;
    height: 100%;
    max-height: 448px;
  }

  .book-item__image {
    display: block;
    border-radius: ${(props) => props.theme.border_radius};
    width: 100%;
    height: 100%;
    max-height: 448px;
  }

  .book-item__title {
    color: ${(props) => props.theme.colors.dark_blue};
    font-weight: 500;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
  }

  .book-item__author {
    color: ${(props) => props.theme.colors.dark_grey};
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .book-item__status {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .book-item__like {
    cursor: pointer;
    display: table;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    opacity: ${(props) => (props.like ? '1' : '0.5')};
    background: ${(props) => props.theme.colors.dark_blue};
  }

  .book-item__like_icon {
    position: relative;
    top: 14px;
    left: 11px;
  }

  .book-item__button {
    font-size: 20px;
    padding: 10px 0;
    width: 100%;
  }

  .default {
    border: 1px solid transparent;
  }

  .outlined {
    border: 1px solid black;
  }

  .book__item__link {
    height: 100%;
    width: 100%;
  }

  .book-item__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .book-item__rating_number {
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #b9bac4;
  }

  ${tablet} {
    width: calc((100% - (20px * 2)) / 3);
    max-width: 254px;

    .book-item__title {
      font-size: 16px;
    }

    .book-item__author {
      font-size: 16px;
    }

    .book-item__rating_number {
      font-size: 12px;
    }

    .book-item__like {
      width: 38px;
      height: 38px;
    }

    .book-item__like_icon {
      position: relative;
      top: 8px;
      left: 10px;
      height: 18px;
      width: 18px;
    }

    .book-item__button {
      font-size: 16px;
    }

    .MuiSvgIcon-fontSizeInherit {
      font-size: 22px;
    }
  }

  ${mobile} {
    width: calc((100% - (20px * 1)) / 2);

    .MuiSvgIcon-fontSizeInherit {
      font-size: 18px;
    }
  }
`;

export { BookItemStyled };
