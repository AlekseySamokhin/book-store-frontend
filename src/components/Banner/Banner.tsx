import { BannerStyled } from './Banner.styled';
import { Flex } from '../../styles/Flex';

import { images } from '../../assets';

import { Button } from '../Button';

const Banner: React.FC = (): JSX.Element => {
  return (
    <BannerStyled>
      <Flex direction="row" justify="space-between">
        <Flex direction="column">
          <h1>Build your library with us</h1>
          <p>
            Buy two books and <br /> get one for free
          </p>
          <Button className="banner__bottom">Choose a book</Button>
        </Flex>
        <img src={images.imageBanner} alt="Banner image" />
      </Flex>
    </BannerStyled>
  );
};

export { Banner };
