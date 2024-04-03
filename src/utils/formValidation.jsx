import * as Yup from "yup";

export const formSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  firstName: Yup.string()
    .min(2)
    .max(20)
    .required("please Enter Your First Name"),
  lastName: Yup.string().min(2).max(20).required("please Enter Your Last Name"),
});
