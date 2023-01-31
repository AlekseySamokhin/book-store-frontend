import styled from 'styled-components';

import { icons } from '@/assets';

const GenreStyled = styled.label`
  .genre-checkbox__block {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .genre-checkbox__name {
    font-size: 16px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: #344966;
    padding-left: 10px;
  }

  .genre-checkbox__item {
    width: 24px;
    height: 24px;
    border-radius: 50px;
    background-color: #fff;
  }

  .checked {
    background-color: #344966;
    border-radius: 50px;
  }

  .checked::before {
    content: url('${icons.checkMark}');
    position: relative;
    top: -3px;
    left: 6px;
  }

  .unchecked {
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #344966;
  }
`;

export { GenreStyled };
