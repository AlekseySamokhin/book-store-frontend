import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email adress').required('Required email'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export { signUpSchema };
