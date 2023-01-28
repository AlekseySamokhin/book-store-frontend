import { ContainerStyled } from '@/components/styles';

import { UploadAvatar, UpdateInfo, UpdatePass } from './components';

import { ProfileStyled } from './Profile.styles';

const Profile: React.FC = (): JSX.Element => {
  return (
    <ContainerStyled>
      <ProfileStyled>
        <UploadAvatar className="profile__avatar" />

        <div className="profile__info">
          <UpdateInfo className="profile__form" />
          <UpdatePass className="profile__form" />
        </div>
      </ProfileStyled>
    </ContainerStyled>
  );
};

export { Profile };
