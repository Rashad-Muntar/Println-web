import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});
const updateProfileSchema = Yup.object().shape({
  id: Yup.number().required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const createJobSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Too Short!")
    .max(350, "Too Long!")
    .required("Required"),
  file: Yup.string().required("Required"),
});

export { SignupSchema, LoginSchema, updateProfileSchema, createJobSchema };
