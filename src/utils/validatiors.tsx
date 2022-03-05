import * as yup from "yup"

export const schemaForSignUp = yup.object({
  firstName: yup.string()
    .required("First name is required!")
    .min(3, "Minimum 3 characters!"),
  secondName: yup.string()
    .required("Second name is required!")
    .min(3, "Minimum 3 characters!"),
  email: yup.string()
    .required('Email is required!')
    .email("Invalid email!"),
  password: yup.string()
    .required('Password is required!')
    .min(8, 'Minimum 8 symbols!'),
  repeatPassword: yup.string()
    .required('Repeat password is required!')
    .oneOf([yup.ref('password')], "Passwords don't match!"),
}).required()

export const schemaForSignIn = yup.object({
  email: yup.string()
    .required('Email is required!')
    .email("Invalid email!"),
  password: yup.string()
    .required('Password is required!')
}).required()

export const schemaForEditUser = yup.object({
  firstName: yup.string()
    .required("First name is required!")
    .min(3, "Minimum 3 characters!"),
  secondName: yup.string()
    .required("Second name is required!")
    .min(3, "Minimum 3 characters!"),
  email: yup.string()
    .required('Email is required!')
    .email("Invalid email!"),
  password: yup.string()
    .required('Password is required!')
    .min(8, 'Minimum 8 symbols!'),
}).required()