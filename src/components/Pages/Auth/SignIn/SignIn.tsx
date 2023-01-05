/* eslint-disable no-console */
import React from 'react';
import { Formik, Form } from 'formik';

import { useNavigate } from 'react-router-dom';

import Container from '../../../styles/Container';

import { SignInWrapper } from './SignIn.styled';

import Input from '../../../Input';

import Button from '../../../Button';

import manImage from '../../../../assets/one-man.png';
import emailIcon from '../../../../assets/mail.svg';
import hideIcon from '../../../../assets/hide.svg';
// import { signUp } from '../../../../api/services/userApi';
import { useAppDispatch } from '../../../../redux/store';

import { signInSchema } from '../../../../validation/schemas/signin';
import { signInUserThunk } from '../../../../redux/users/usersThunks';
// import { getCurrentUserThunk } from '../../../../redux/users/usersThunks';

// import { login } from '../../../../redux/users/usersSlice';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSumbit = async (values: any) => {
    try {
      // const newUser = await signUp({
      //  email: values.email,
      //  password: values.password,
      // });

      // console.log(newUser);
      // dispatch(getCurrentUserThunk(newUser));
      dispatch(
        signInUserThunk({
          email: values.email,
          password: values.password,
        }),
      );

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SignInWrapper>
        <div className="form">
          <h2>Sing Up</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={handleSumbit}
          >
            {({ errors, touched, getFieldProps }) => (
              <Form noValidate>
                <label>
                  <Input
                    type="email"
                    icon={emailIcon}
                    fieldInputProps={getFieldProps('email')}
                    placeholder={'Email'}
                  />
                  {touched.email && errors.email ? (
                    <p className="red">{errors.email}</p>
                  ) : (
                    <p>Enter you email</p>
                  )}
                </label>
                <label>
                  <Input
                    type="password"
                    icon={hideIcon}
                    placeholder={'Password'}
                    fieldInputProps={getFieldProps('password')}
                  />
                  {touched.password && errors.password ? (
                    <p className="red">{errors.password}</p>
                  ) : (
                    <p>Enter your password</p>
                  )}
                </label>
                <Button type="submit" className="form__button">
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <img src={manImage} alt="Image one man" />
      </SignInWrapper>
    </Container>
  );
};

export default SignUp;
