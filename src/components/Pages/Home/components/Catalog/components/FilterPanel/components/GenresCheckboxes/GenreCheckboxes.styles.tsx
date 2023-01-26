import styled from 'styled-components';

import { icons } from '@/assets';

const GenreCheckboxesStyled = styled.div`
  position: absolute;
  top: 74px;
  left: 0;
  background-color: #f0f4ef;
  border-radius: 16px;
  width: 305px;
  padding: 15px 0 15px 15px;
  z-index: 1000;
  cursor: pointer;

  & ::after {
    content: '';
    position: absolute;
    left: 15px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 17px solid #f0f4ef;
    clear: both;
  }

  .genre-checkbox__block {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .genre-checkbox__name {
    // font-weight: 500;
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

export { GenreCheckboxesStyled };
