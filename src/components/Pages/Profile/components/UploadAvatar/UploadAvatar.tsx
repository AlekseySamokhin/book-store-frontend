/* eslint-disable no-console */
import { icons } from '../../../../../assets';
import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import { userThunks } from '../../../../../redux/users/thunks';
import { UploadAvatarStyled } from './UploadAvatar.styles';

interface ITypesProps {
  className?: string;
}

const UploadAvatar: React.FC<ITypesProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const infoUser = useAppSelector((state) => state.users.user);

  const handleUploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      try {
        if (!reader.result) return;

        const imageURL = reader.result as string;

        await dispatch(userThunks.updateAvatar({ imageURL }));
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <UploadAvatarStyled className={props.className}>
      {infoUser.avatar ? (
        <img
          className="user__avatar_image"
          src={infoUser.avatar}
          alt="Default icon user"
        />
      ) : (
        <img
          className="default__avatar_icon"
          src={icons.userProfile}
          alt="Avatar current user"
        />
      )}

      <label htmlFor="uploadAvatar">
        <div className="default__avatar__upload">
          <img src={icons.camera} alt="Icon button change avatar" />

          <input
            type="file"
            id="uploadAvatar"
            onChange={(e) => handleUploadAvatar(e)}
            accept="image/*,.jpg,.jpeg,.png"
            hidden
          />
        </div>
      </label>
    </UploadAvatarStyled>
  );
};

export { UploadAvatar };
