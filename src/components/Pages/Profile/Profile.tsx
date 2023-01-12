/* eslint-disable no-console */
import Container from '../../../styles/Container';

import { icons } from '../../../assets';

import { ProfileStyled } from './Profile.styles';

import { useAppSelector } from '../../../redux/store';
import CustomInput from '../../CustomInput/CustomInput';

const Profile: React.FC = (): JSX.Element => {
  // const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);

  const handleUploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <ProfileStyled>
        <div className="profile__avatar">
          {!user.avatar ? (
            <img
              className="default__avatar_icon"
              src={icons.userProfile}
              alt="User profile icon"
            />
          ) : null}

          <label htmlFor="file">
            <div className="default__avatar__upload">
              <img src={icons.camera} alt="Upload avatar icon" />

              <input
                className="styled-user-page__input-file"
                type="file"
                id="file"
                name="file"
                onChange={(e) => handleUploadAvatar(e)}
                hidden
              />
            </div>
          </label>
        </div>

        <form className="profile__form-personal-info">
          <div className="profile__text">
            <h3>Personal information</h3>
            <p>Change information</p>
          </div>

          <CustomInput
            className="profile__input"
            type="text"
            icon={icons.userInput}
            placeholder={'Your name'}
          />

          <CustomInput
            className="profile__input"
            type="email"
            icon={icons.mail}
            placeholder={'Your email'}
          />

          <div className="profile__text">
            <h3>Personal information</h3>
            <p>Change information</p>
          </div>

          <CustomInput
            className="profile__input"
            type="text"
            icon={icons.userInput}
            placeholder={'Your name'}
          />

          <CustomInput
            className="profile__input"
            type="email"
            icon={icons.mail}
            placeholder={'Your email'}
          />
        </form>
      </ProfileStyled>
    </Container>
  );
};

export { Profile };
