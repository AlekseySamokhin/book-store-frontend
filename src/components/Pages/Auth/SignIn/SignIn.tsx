/* eslint-disable no-console */
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

import Container from '../../../../styles/Container';

import { SignInWrapper } from './SignIn.styled';

import CustomInput from '../../../CustomInput';

import { Button } from '../../../Button';

import { icons, images } from '../../../../assets';

import { useAppDispatch } from '../../../../redux/store';

import { signInSchema } from '../../../../schemas/auth';
import { authThunks } from '../../../../redux/users/thunks/auth';
import Input from '../../../Input';

interface IFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignIn: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>,
  ) => {
    try {
      await dispatch(
        authThunks.signIn({
          email: values.email,
          password: values.password,
        }),
      ).unwrap();

      actions.resetForm();

      navigate('/');
    } catch (err) {
      toast.error((err as { message: string }).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const initialValues: IFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { errors, touched, getFieldProps, handleSubmit, isSubmitting, values } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: onSubmitHandler,
    });

  return (
    <Container>
      <SignInWrapper>
        <div className="form">
          <h2>Sing In</h2>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <label>
              <CustomInput
                type="email"
                icon={icons.mail}
                value={values.email}
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
            <Input
              type="email"
              placeholder="Email"
              text={'Enter you name'}
              icon={icons.mail}
              title={'Your name'}
              disabled={true}
              value={values.email}
              error={errors.email || ''}
              touched={touched.email}
              fieldInputProps={getFieldProps('email')}
            />

            <label>
              <CustomInput
                type="password"
                icon={icons.hide}
                value={values.password}
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

            <Input
              type="password"
              placeholder="Email"
              text={'Enter you password'}
              icon={icons.hide}
              title={'Your password'}
              disabled={true}
              value={values.password}
              error={errors.password}
              touched={touched.password}
              fieldInputProps={getFieldProps('password')}
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              className="form__button"
            >
              Sign In
            </Button>
          </form>
        </div>
        <img src={images.authPageManWithBook} alt="Image one man" />
      </SignInWrapper>
    </Container>
  );
};

export default SignIn;
