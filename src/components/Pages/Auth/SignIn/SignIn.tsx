/* eslint-disable no-console */
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';

import { useNavigate } from 'react-router-dom';

import Container from '../../../../styles/Container';

import { SignInWrapper } from './SignIn.styled';

import CustomInput from '../../../CustomInput';

import { Button } from '../../../Button';

import { icons, images } from '../../../../assets';

import { useAppDispatch } from '../../../../redux/store';

import { signInSchema } from '../../../../schemas/auth';
import { userThunks } from '../../../../redux/users/userThunks';

interface IFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>,
  ) => {
    try {
      dispatch(
        userThunks.signIn({
          email: values.email,
          password: values.password,
        }),
      );

      actions.resetForm();

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const initialValues: IFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { errors, touched, getFieldProps, handleSubmit, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit,
    });

  return (
    <Container>
      <SignInWrapper>
        <div className="form">
          <h2>Sing Up</h2>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <label>
              <CustomInput
                type="email"
                icon={icons.mail}
                placeholder={'Email'}
                error={errors.email || ''}
                touched={touched.email}
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
            <Button
              disabled={isSubmitting}
              type="submit"
              className="form__button"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <img src={images.oneMan} alt="Image one man" />
      </SignInWrapper>
    </Container>
  );
};

export default SignIn;
