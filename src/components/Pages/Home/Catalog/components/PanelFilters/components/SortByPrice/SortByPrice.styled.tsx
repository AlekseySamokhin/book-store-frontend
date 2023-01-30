import styled from 'styled-components';

const SortByPriceStyled = styled.div`
  position: absolute;
  top: 74px;
  left: 0;
  background-color: #f0f4ef;
  border-radius: 16px;
  width: 413px;
  padding: 50px 16px 69px 18px;
  z-index: 1000;
  cursor: pointer;

  .sort-by-price__values {
    position: relative;
    top: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    color: #344966;
    display: flex;
    justify-content: space-between;

    & span {
      font-weight: 400;
      font-size: 16px;
      line-height: 34px;
      letter-spacing: 0.75px;
    }
  }

  /* & ::after {
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
  } */

  .horizontal-slider {
    /* width: 100%;
    max-width: 500px;
    height: 100vh;
    margin: auto; */
  }

  .example-thumb {
    cursor: grab;
    // position: absolute;
    z-index: 100;
    background: #ffffff;
    border: 2px solid #bfcc94;
    border-radius: 40px;
    display: block;
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 44%);
  }

  /* .example-thumb.active {
    background-color: grey;
  } */

  .example-track {
    background: #d6d8e7;
    border-radius: 40px;
    position: relative;
  }

  .example-track.example-track-1 {
    background: #bfcc94;
  }

  .example-track.example-track-0 {
    background: #d6d8e7;
  }

  .horizontal-slider .example-track {
    height: 12px;
  }

  .horizontal-slider .example-thumb {
    top: -10px;
    width: 32px;
    height: 32px;
    outline: none;
  }
`;

export { SortByPriceStyled };
