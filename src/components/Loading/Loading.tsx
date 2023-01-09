import { ColorRing } from 'react-loader-spinner';

import Container from '../../styles/Container';

const Loading = () => {
  return (
    <Container>
      <ColorRing
        colors={['#344966', '#344966', '#344966', '#344966', '#344966']}
        height="150"
        width="150"
        wrapperStyle={{
          display: 'block',
          margin: '150px auto',
        }}
      />
    </Container>
  );
};

export { Loading };
