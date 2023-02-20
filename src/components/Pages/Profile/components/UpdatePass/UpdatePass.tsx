import { useState } from 'react';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';

import { useAppDispatch } from '@/redux/store';
import { userThunks } from '@/redux/users/thunks';
import { updatePasswordUserSchema } from '@/schemas/schemaUser';

import { Button, Input } from '@/components/ui';
import { icons } from '@/assets';

import { UpdatePassStyled } from './UpdatePass.styles';

interface IFormValuesPass {
  newPassword: string;
  confirmPassword: string;
}

interface ITypeProps {
  className?: string;
}

const UpdatePass: React.FC<ITypeProps> = (props) => {
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
      dispatch(
        userThunks.updatePassword({
          password: values.newPassword,
        }),
      );
      actions.resetForm();

      setHidePass(false);
    } catch (err) {
      // eslint-disable-next-line no-console
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

      <Input
        className="profile__input-first"
        type="text"
        title={!hidePass ? 'Your password' : 'Old password'}
        text="******************"
        hide={true}
        icon={icons.hide}
        disabled={true}
      />

      {hidePass && (
        <>
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

          <Button className="profile__button" type="submit">
            Confirm
          </Button>
        </>
      )}
    </UpdatePassStyled>
  );
};

export { UpdatePass };
