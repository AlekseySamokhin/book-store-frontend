import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email adress').required('Required email'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export { signInSchema };
