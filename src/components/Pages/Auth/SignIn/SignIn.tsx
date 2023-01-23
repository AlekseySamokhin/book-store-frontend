/* eslint-disable no-console */
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../../../../redux/store';
import { authThunks } from '../../../../redux/users/thunks/auth';

import Container from '../../../../styles/Container';

import { SignInStyled } from './SignIn.styles';

import { icons, images } from '../../../../assets';

import { signInSchema } from '../../../../schemas/auth';

import { Input, Button } from '../../../ui';

interface ITypesValuesForm {
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignIn: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (
    values: ITypesValuesForm,
    actions: FormikHelpers<ITypesValuesForm>,
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as ITypesValuesForm,
    validationSchema: signInSchema,
    onSubmit: onSubmitHandler,
  });

  return (
    <Container>
      <SignInStyled>
        <div className="form">
          <h2>Sing In</h2>

          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <Input
              className="sign-in__input"
              type="email"
              placeholder="Email"
              text={'Enter you name'}
              description={'Enter you name'}
              icon={icons.mail}
              title={'Your name'}
              disabled={true}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              fieldInputProps={formik.getFieldProps('email')}
            />

            <Input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              text={'Enter you password'}
              description={'Enter you password'}
              icon={icons.hide}
              title={'Your password'}
              disabled={true}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
              fieldInputProps={formik.getFieldProps('password')}
            />

            <Button
              disabled={formik.isSubmitting}
              type="submit"
              className="form__button"
            >
              Sign In
            </Button>
          </form>
        </div>
        <img src={images.authPageManWithBook} alt="Image one man" />
      </SignInStyled>
    </Container>
  );
};

export default SignIn;
