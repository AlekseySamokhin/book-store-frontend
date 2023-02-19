import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/redux/store';
import { authThunks } from '@/redux/users/thunks/authThunks';
import { signInSchema } from '@/schemas/schemaAuth';

import { Input, Button } from '@/components/ui';
import { Container } from '@/components/styles';

import { icons, images } from '@/assets';

import { AuthStyled } from './Auth.styles';

interface ITypesValuesForm {
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignIn: React.FC = () => {
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
      <AuthStyled>
        <div className="auth__content">
          <h2 className="auth__content_title">Sing In</h2>

          <form className='auth__form' noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <Input
              className="auth__input"
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
              className="auth__input"
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
              className="auth__button"
            >
              Sign In
            </Button>
          </form>
        </div>

        <img src={images.authPageManWithBook} className="sign-in__image" alt="Image one man" />
      </AuthStyled>
    </Container>
  );
};

export { SignIn };
