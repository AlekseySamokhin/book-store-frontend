import * as yup from 'yup';

const updateInfoUserSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

const updatePasswordUserSchema = yup.object().shape({
  password: yup
    .string()
    .min(3, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
  oldPassword: yup
    .string()
    .min(3, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(3, 'Password should be of minimum 5 characters length')
    .required('Password is required'),
});

export { updateInfoUserSchema, updatePasswordUserSchema };
