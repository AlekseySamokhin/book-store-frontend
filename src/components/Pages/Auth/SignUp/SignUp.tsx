/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
import { useState } from 'react';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../redux/store';
import { authThunks } from '../../../../redux/users/thunks/auth';
import { signUpSchema } from '../../../../schemas/auth';

import Container from '../../../../styles/Container';
import CustomInput from '../../../CustomInput';
import { Button } from '../../../Button';
import { SignUpWrapper } from './SignUp.styled';

import { icons, images } from '../../../../assets';

interface IFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignUp: React.FC = () => {
  const [isSubmiting, setSubmiting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>,
  ) => {
    try {
      setSubmiting(true);

      setTimeout(() => {
        dispatch(
          authThunks.signUp({
            email: values.email,
            password: values.password,
          }),
        );

        actions.resetForm();

        setSubmiting(false);
        navigate('/');
      }, 800);
    } catch (err) {
      console.log(err);
    }
  };

  const initialValues: IFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <Container>
      <SignUpWrapper>
        <div className="form">
          <h2>Sing Up</h2>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <label>
              <CustomInput
                type="email"
                icon={icons.mail}
                error={errors.email || ''}
                touched={touched.email}
                placeholder={'Email'}
                fieldInputProps={getFieldProps('email')}
              />
              {touched.email && errors.email ? (
                <p className="red">{errors.email}</p>
              ) : (
                <p>Enter you email</p>
              )}
            </label>
            <label>
              <CustomInput
                type="password"
                icon={icons.hide}
                placeholder={'Password'}
                error={errors.password || ''}
                touched={touched.password}
                fieldInputProps={getFieldProps('password')}
              />
              {touched.password && errors.password ? (
                <p className="red">{errors.password}</p>
              ) : (
                <p>Enter your password</p>
              )}
            </label>
            <label>
              <CustomInput
                type="password"
                icon={icons.hide}
                placeholder={'Password'}
                error={errors.confirmPassword || ''}
                touched={touched.confirmPassword}
                fieldInputProps={getFieldProps('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="red">{errors.confirmPassword}</p>
              ) : (
                <p>Repeat your password without errors</p>
              )}
            </label>
            <Button
              disabled={isSubmiting}
              type="submit"
              className="form__button"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <img className="main-image" src={images.oneMan} alt="Image one man" />
      </SignUpWrapper>
    </Container>
  );
};

export default SignUp;
