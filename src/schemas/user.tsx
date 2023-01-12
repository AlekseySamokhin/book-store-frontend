import * as yup from 'yup';

const updateInfoUserSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

const updatePasswordUserSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
  password: yup
    .string()
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

export { updateInfoUserSchema, updatePasswordUserSchema };
