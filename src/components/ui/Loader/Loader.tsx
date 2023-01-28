import { Oval } from 'react-loader-spinner';

import { ContainerStyled } from '@/components/styles';

const Loader: React.FC = (): JSX.Element => {
  return (
    <ContainerStyled>
      <Oval
        height={100}
        width={100}
        color="#344966"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#344966"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </ContainerStyled>
  );
};

export { Loader };
