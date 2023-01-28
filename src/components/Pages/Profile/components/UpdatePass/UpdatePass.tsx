/* eslint-disable no-console */
import { useState } from 'react';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';

import { useAppDispatch } from '../../../../../redux/store';
import { userThunks } from '../../../../../redux/users/thunks';
import { updatePasswordUserSchema } from '../../../../../schemas/schemaUser';

import { icons } from '../../../../../assets';

import { Button, Input } from '../../../../ui';

import { UpdatePassStyled } from './UpdatePass.styles';

interface IFormValuesPass {
  newPassword: string;
  confirmPassword: string;
}

interface ITypesProps {
  className?: string;
}

const UpdatePass: React.FC<ITypesProps> = (props): JSX.Element => {
  const [hidePass, setHidePass] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleChangePass = () => {
    setHidePass(!hidePass);
  };

  const handleOnSubmit = async (
    values: IFormValuesPass,
    actions: FormikHelpers<IFormValuesPass>,
  ) => {
    try {
      console.log(values);
      dispatch(
        userThunks.updatePassword({
          password: values.newPassword,
        }),
      );
      actions.resetForm();

      setHidePass(false);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: updatePasswordUserSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <UpdatePassStyled
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className={props.className || ''}
    >
      <div className="profile__text">
        <h3>Password</h3>
        <p onClick={handleChangePass}>Change password</p>
      </div>

      {/* <CustomInput
        className="profile__input"
        type="text"
        value={formik.values.oldPassword}
        disabled
        icon={icons.hide}
        placeholder={'Your password'}
        error={formik.errors.oldPassword || ''}
        touched={formik.touched.oldPassword}
        fieldInputProps={formik.getFieldProps('oldPassword')}
      /> */}

      <Input
        className='profile__input-first'
        type="text"
        title={!hidePass ? 'Your password' : 'Old password'}
        text="******************"
        hide={true}
        icon={icons.hide}
        // value={formik.values.oldPassword}
        disabled={true}
      />

      {hidePass && (
        <>
          {/* <CustomInput
            className="profile__input"
            type="password"
            value={formik.values.newPassword}
            disabled={!hidePass}
            icon={icons.hide}
            placeholder={'Your password'}
            error={formik.errors.newPassword || ''}
            touched={formik.touched.newPassword}
            fieldInputProps={formik.getFieldProps('newPassword')}
          />

          {formik.touched.newPassword &&
          formik.errors.newPassword &&
          !hidePass ? (
              <p className="error">{formik.errors.newPassword}</p>
            ) : (
              <p>Change password</p>
            )} */}

          {/* <CustomInput
            className="profile__input"
            type="password"
            value={formik.values.confirmPassword}
            disabled={!hidePass}
            icon={icons.hide}
            placeholder={'Your password'}
            error={formik.errors.confirmPassword || ''}
            touched={formik.touched.confirmPassword}
            fieldInputProps={formik.getFieldProps('confirmPassword')}
          />

          {formik.touched.confirmPassword &&
          formik.errors.confirmPassword &&
          !hidePass ? (
              <p className="error">{formik.errors.confirmPassword}</p>
            ) : (
              <p>Change password</p>
            )} */}

          <Input
            className="profile__input"
            type="password"
            placeholder="New password"
            text="Your password"
            hide={!hidePass}
            icon={icons.hide}
            value={formik.values.newPassword}
            disabled={hidePass}
            error={formik.errors.newPassword || ''}
            touched={formik.touched.newPassword}
            description="Enter your password"
            fieldInputProps={formik.getFieldProps('newPassword')}
          />

          {/* {formik.touched.newPassword &&
            formik.errors.newPassword &&
            hidePass ? (
              <p className="error-message">{formik.errors.newPassword}</p>
            ) : (
              <p className='primary-message'>Enter your password</p>
            )} */}

          <Input
            className="profile__input"
            type="password"
            placeholder="Password replay"
            text="Your password"
            hide={!hidePass}
            icon={icons.hide}
            value={formik.values.confirmPassword}
            disabled={hidePass}
            error={formik.errors.confirmPassword || ''}
            touched={formik.touched.confirmPassword}
            fieldInputProps={formik.getFieldProps('confirmPassword')}
            description="Repeat your password without errors"
          />
          {/*
          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword &&
            hidePass ? (
              <p className="error-message">{formik.errors.confirmPassword}</p>
            ) : (
              <p className='primary-message'>Repeat your password without errors</p>
            )} */}

          <Button type="submit">Confirm</Button>

        </>
      )}
    </UpdatePassStyled>
  );
};

export { UpdatePass };
