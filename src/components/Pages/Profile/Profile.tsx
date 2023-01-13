/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable no-console */
import { useState } from 'react';

import { useFormik } from 'formik';

import Container from '../../../styles/Container';

import { icons } from '../../../assets';

import { ProfileStyled } from './Profile.styles';

import { userThunks } from '../../../redux/users/thunks/user';

import { useAppSelector, useAppDispatch } from '../../../redux/store';
import CustomInput from '../../CustomInput';
import { Button } from '../../Button';

import {
  updateInfoUserSchema,
  updatePasswordUserSchema,
} from '../../../schemas/user';

interface IFormValues {
  fullName: string;
  email: string;
}

interface IFormValuesPass {
  password: string;
  oldPassword: string;
  confirmPassword: string;
}

const Profile: React.FC = (): JSX.Element => {
  const [hidePass, setHidePass] = useState<boolean>(false);
  const [hideInfo, setHideInfo] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const infoUser = useAppSelector((state) => state.users.user);

  const handleUploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleChangePass = () => {
    setHidePass(!hidePass);
  };

  const handleChangeInfo = () => {
    setHideInfo(!hideInfo);
  };

  const handleSumbitInfo = async (values: IFormValues) => {
    try {
      dispatch(
        userThunks.updateInfo({
          fullName: values.fullName,
          email: values.email,
        }),
      );

      setHideInfo(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSumbitPass = async (values: IFormValuesPass) => {
    try {
      console.log(values);
      // dispatch(
      //   userThunks.updatePassword({
      //     password: values.password,
      //     oldPassword: values.oldPassword,
      //     confirmPassword: values.confirmPassword,
      //   }),
      // );
    } catch (err) {
      console.log(err);
    }
  };

  const formikInfo = useFormik({
    initialValues: {
      fullName: infoUser.fullName,
      email: infoUser.email,
    },
    validationSchema: updateInfoUserSchema,
    onSubmit: handleSumbitInfo,
  });

  const formikPass = useFormik({
    initialValues: {
      password: '',
      oldPassword: '',
      confirmPassword: '',
    },
    validationSchema: updatePasswordUserSchema,
    onSubmit: handleSumbitPass,
  });

  return (
    <Container>
      <ProfileStyled>
        <div className="profile__avatar">
          {!infoUser.avatar ? (
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

        <div className="profile__info">
          <form
            noValidate
            autoComplete="off"
            onSubmit={formikInfo.handleSubmit}
            className="profile__form"
          >
            <div className="profile__text">
              <h3>Personal information</h3>
              <p onClick={handleChangeInfo}>Change information</p>
            </div>

            <CustomInput
              className="profile__input"
              type="text"
              value={infoUser.fullName}
              disabled={!hideInfo}
              icon={icons.userInput}
              placeholder={'Your full name'}
              error={formikInfo.errors.fullName}
              touched={formikInfo.touched.fullName}
              fieldInputProps={formikInfo.getFieldProps('fullName')}
            />

            {formikInfo.touched.fullName &&
            formikInfo.errors.fullName &&
            !hideInfo ? (
                <p className="error">{formikInfo.errors.fullName}</p>
              ) : (
                <p>Change full name</p>
              )}

            <CustomInput
              className="profile__input"
              type="email"
              value={infoUser.email}
              disabled={!hideInfo}
              icon={icons.mail}
              placeholder={'Your email'}
              error={formikInfo.errors.email || ''}
              touched={formikInfo.touched.email}
              fieldInputProps={formikInfo.getFieldProps('email')}
            />

            {formikInfo.touched.email &&
            formikInfo.errors.email &&
            !hideInfo ? (
                <p className="error">{formikInfo.errors.email}</p>
              ) : (
                <p>Change email</p>
              )}

            {hideInfo && <Button>Confirm</Button>}
          </form>

          <form
            noValidate
            autoComplete="off"
            onSubmit={formikPass.handleSubmit}
            className="profile__form"
          >
            <div className="profile__text">
              <h3>Password</h3>
              <p onClick={handleChangePass}>Change password</p>
            </div>

            <CustomInput
              className="profile__input"
              type="password"
              value={formikPass.values.password}
              disabled={!hidePass}
              icon={icons.hide}
              placeholder={'Your password'}
              error={formikPass.errors.password || ''}
              touched={formikPass.touched.password}
              fieldInputProps={formikPass.getFieldProps('password')}
            />

            {formikPass.touched.password &&
            formikPass.errors.password &&
            !hidePass ? (
                <p className="error">{formikPass.errors.password}</p>
              ) : (
                <p>Change password</p>
              )}

            {hidePass && (
              <>
                <CustomInput
                  className="profile__input"
                  type="password"
                  value={formikPass.values.oldPassword}
                  disabled={!hidePass}
                  icon={icons.hide}
                  placeholder={'Your password'}
                  error={formikPass.errors.oldPassword || ''}
                  touched={formikPass.touched.oldPassword}
                  fieldInputProps={formikPass.getFieldProps('oldPassword')}
                />

                {formikPass.touched.oldPassword &&
                formikPass.errors.oldPassword &&
                !hidePass ? (
                    <p className="error">{formikPass.errors.oldPassword}</p>
                  ) : (
                    <p>Change password</p>
                  )}

                <CustomInput
                  className="profile__input"
                  type="password"
                  value={formikPass.values.password}
                  disabled={!hidePass}
                  icon={icons.hide}
                  placeholder={'Your password'}
                  error={formikPass.errors.confirmPassword || ''}
                  touched={formikPass.touched.confirmPassword}
                  fieldInputProps={formikPass.getFieldProps('confirmPassword')}
                />

                {formikPass.touched.confirmPassword &&
                formikPass.errors.confirmPassword &&
                !hidePass ? (
                    <p className="error">{formikPass.errors.confirmPassword}</p>
                  ) : (
                    <p>Change password</p>
                  )}

                <Button type="submit">Confirm</Button>
              </>
            )}
          </form>
        </div>
      </ProfileStyled>
    </Container>
  );
};

export { Profile };
