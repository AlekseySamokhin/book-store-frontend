import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { FormikHelpers } from 'formik';

import { useAppDispatch } from '@/redux/store';
import { authThunks } from '@/redux/users/thunks/authThunks';
import { signUpSchema } from '@/schemas/schemaAuth';

import { Button, Input } from '@/components/ui';
import { Container } from '@/components/styles';

import { icons, images } from '@/assets';

import { AuthStyled } from './Auth.styles';

interface ITypesValuesForm {
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignUp: React.FC = (): JSX.Element => {
  const [isSubmiting, setSubmiting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (
    values: ITypesValuesForm,
    actions: FormikHelpers<ITypesValuesForm>,
  ) => {
    try {
      actions.resetForm();

      await dispatch(
        authThunks.signUp({
          email: values.email,
          password: values.password,
        }),
      ).unwrap();
      setSubmiting(true);

      setSubmiting(false);

      navigate('/');
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as ITypesValuesForm,
    validationSchema: signUpSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <Container>
      <AuthStyled>
        <div className="auth__content">
          <h2 className='auth__content_title'>Sing Up</h2>

          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <Input
              className="auth__input"
              type="email"
              placeholder="Email"
              text={'Enter you email'}
              description={'Enter you email'}
              icon={icons.mail}
              title={'Enter you email'}
              disabled={true}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              fieldInputProps={formik.getFieldProps('email')}
            />

            <Input
              className="auth__input"
              type="password"
              placeholder="Password"
              text={'Enter you password'}
              description={'Enter you password'}
              icon={icons.hide}
              title={'Enter you password'}
              disabled={true}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
              fieldInputProps={formik.getFieldProps('password')}
            />

            <Input
              className="auth__input"
              type="password"
              placeholder="Password replay"
              text="Enter you password"
              description="Repeat your password without errors"
              icon={icons.hide}
              title="Enter you password"
              disabled={true}
              value={formik.values.confirmPassword}
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
              fieldInputProps={formik.getFieldProps('confirmPassword')}
            />

            <Button
              disabled={isSubmiting}
              type="submit"
              className="auth__button"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <img
          className="auth__image"
          src={images.authPageManWithBook}
          alt="Image one man"
        />
      </AuthStyled>
    </Container>
  );
};

export { SignUp };
