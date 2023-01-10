import * as yup from 'yup';

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// const signUpSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Please enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(5, 'Password should be of minimum 5 characters length')
//     .matches(passwordRules, { message: 'Please create a stronger password' })
//     .required('Password is required'),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Passwords must match')
//     .required('Password is required'),
// });

// const signInSchema = yup.object().shape({
//   email: yup.string().email('Invalid email address').required('Required email'),
//   password: yup
//     .string()
//     .min(5, 'Password should be of minimum 5 characters length')
//     .matches(passwordRules, { message: 'Please create a stronger password' })
//     .required('Password is required'),
// });

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required email'),
  password: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
});

export { signUpSchema, signInSchema };
