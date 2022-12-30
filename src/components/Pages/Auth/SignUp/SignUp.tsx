// import React, { useState } from 'react';

// import { Formik } from 'formik';

// import { useAppDispatch, useAppSelector } from '../../../../redux/store';

import Container from '../../../styles/Container';

import imageMan from '../../../../assets/one-man.png';

import { SignUpStyled } from './SignUp.styled';

import Input from '../../../Input';

import Button from '../../../Button';

import emailIcon from '../../../../assets/mail.svg';
import hideIcon from '../../../../assets/hide.svg';

const SignUp = () => {
  return (
    <Container>
      <SignUpStyled>
        <div className="block-form">
          <h2>Sing Up</h2>
          <form>
            <label>
              <Input icon={emailIcon} type="email" placeholder={'Email'} />
              <p>Enter you email</p>
            </label>
            <label>
              <Input icon={hideIcon} type="password" placeholder={'Password'} />
              <p>Enter you password</p>
            </label>
            <label>
              <Input
                icon={hideIcon}
                type="password"
                placeholder={'Password replay'}
              />
              <p>Repeat your password without errors</p>
            </label>
            <Button className="form__button">Log In</Button>
          </form>
        </div>
        <img src={imageMan} alt="Image one man" />
      </SignUpStyled>
    </Container>
  );
};

export default SignUp;
