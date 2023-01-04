/* eslint-disable no-console */
import React from 'react';
import { Formik, Form } from 'formik';

import { useNavigate } from 'react-router-dom';

import Container from '../../../styles/Container';

import { SignUpWrapper } from './SignUp.styled';

import Input from '../../../Input';

import Button from '../../../Button';

import manImage from '../../../../assets/one-man.png';
import emailIcon from '../../../../assets/mail.svg';
import hideIcon from '../../../../assets/hide.svg';
import { signUp } from '../../../../api/userApi';
import { useAppDispatch } from '../../../../redux/store';

import { SignUpSchema } from '../../../../validation/schemas/singup';

import { login } from '../../../../redux/users/usersSlice';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSumbit = async (values: any) => {
    try {
      const newUser = await signUp({
        email: values.email,
        password: values.password,
      });

      dispatch(login(newUser));

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SignUpWrapper>
        <div className="form">
          <h2>Sing Up</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignUpSchema}
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
                <label>
                  <Input
                    type="password"
                    icon={hideIcon}
                    placeholder={'Password'}
                    fieldInputProps={getFieldProps('confirmPassword')}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <p className="red">{errors.confirmPassword}</p>
                  ) : (
                    <p>Repeat your password without errors</p>
                  )}
                </label>
                <Button type="submit" className="form__button">
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <img src={manImage} alt="Image one man" />
      </SignUpWrapper>
    </Container>
  );
};

export default SignUp;
