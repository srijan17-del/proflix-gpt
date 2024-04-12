import { useState } from "react";
import { useDispatch } from "react-redux";
// import React from "react";
import Header from "./Header";
import { useFormik } from "formik";
import { formSchema } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

// import { checkValidation } from "../utils/validate";

const Login = () => {
  // form validation using regex and useRef hook starts here
  // const FirstName = useRef();
  // const LastName = useRef();
  // const email = useRef();
  // const password = useRef();

  // const handleForm = () => {
  //   const message = checkValidation(
  //     FirstName.current.value,
  //     LastName.current.value,
  //     email.current.value,
  //     password.current.value
  //   );
  //   console.log(FirstName.current.value);
  // };
  // form validation using regex and useRef hook ends here
  // const [isfirebaseError, setIsFirebaseError] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firebaseError, setFirebaseError] = useState("");
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  /** Form validation using formik and yup Starts here */
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const { values, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(errors);

      /**Sign up through Firebase */

      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // user.displayName = values.firstName + " " + values.lastName;

            updateProfile(user, {
              displayName: values.firstName + " " + values.lastName,
            })
              .then(() => {
                // Profile updated!
                // ...
                const { uid, displayName, email } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                // ...
                console.log(error);
              });

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "-" + errorMessage);
            // setFirebaseError(errorCode + "-" + errorMessage);
            // ..
          });
        // navigate("/browse");
      }
    },
  });

  const handleForm = () => {
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const { uid, displayName, email } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              displayName: displayName,
              email: email,
            })
          );
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setIsFirebaseError(true);
          setFirebaseError(errorCode + "-" + errorMessage);
        });
    }
  };

  // if (isfirebaseError == false) {
  //   setFirebaseError("");
  // }

  /** Form validation using formik and yup Ends here */
  // prevent from going back to login

  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <img
          className="brightness-50 absolute h-[60rem] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-backgroundImg"
        />
        <form
          className="flex flex-col items-start pt-12 px-12 pb-28 rounded-lg bg-opacity-70 top-28 bg-black w-[26rem] h-auto relative "
          onSubmit={handleSubmit}
        >
          <h1 id="sign" className="text-white text-4xl font-semibold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div className="relative">
              <input
                // form validation using regex and useRef ref={firstName}
                className="peer my-3 h-14  text-white bg-[#0F0F0F] opacity-75 border-[1px] border-[#7a7070] rounded w-[19rem] pt-3 px-3 pb-1 placeholder-transparent font-medium "
                type="text"
                placeholder="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <label
                className="text-[#ACB4B4] cursor-text absolute transition-all left-3 top-4 text-sm
                peer-placeholder-shown:left-3 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base 
                peer-focus:text-sm peer-focus:top-4 "
              >
                First Name
              </label>
              {errors.firstName && touched.firstName ? (
                <p className="text-red-600 tracking-wider text-sm font-[250px] -mt-3 mb-2.5">
                  {errors.firstName}
                </p>
              ) : null}
            </div>
          )}
          {!isSignInForm && (
            <div className="relative w-auto h-auto">
              <input
                // form validation using regex and useRef ref={LastName}
                className="peer my-3 h-14  text-white bg-[#0F0F0F] opacity-75 border-[1px] border-[#7a7070] rounded w-[19rem] pt-3 px-3 pb-1 placeholder-transparent font-medium"
                type="text"
                placeholder="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              <label
                htmlFor="name"
                className="text-[#ACB4B4] cursor-text absolute transition-all left-3 top-4 text-sm
                peer-placeholder-shown:left-3 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base
                peer-focus:text-sm peer-focus:top-4 "
              >
                Last Name
              </label>
              {errors.lastName && touched.lastName ? (
                <p className="text-red-600 tracking-wider text-sm font-[250px] -mt-3 mb-2.5">
                  {errors.lastName}
                </p>
              ) : null}
            </div>
          )}
          <div className="relative">
            <input
              // form validation using regex and useRef ref={email}
              className="peer my-3 h-14  text-white bg-[#0F0F0F] opacity-75 border-[1px] border-[#7a7070] rounded w-[19rem] pt-3 px-3 pb-1 placeholder-transparent font-medium "
              type="text"
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              // onBlur={handleBlur}
            />
            <label
              htmlFor="email"
              className="text-[#ACB4B4]  absolute transition-all left-3 top-4 text-sm
              peer-placeholder-shown:left-3 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base 
                peer-focus:text-sm peer-focus:top-4 cursor-text "
            >
              Email
            </label>
            {errors.email && touched.email ? (
              <p className="text-red-600 tracking-wider text-sm font-[250px] -mt-3 mb-2.5">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="relative">
            <input
              // form validation using regex and useRef ref={password}
              className="peer my-3 h-14  text-white bg-[#0F0F0F] opacity-75 border-[1px] border-[#7a7070] rounded w-[19rem] pt-3 px-3 pb-1 placeholder-transparent"
              type="password"
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              // onBlur={handleBlur}
            />
            <label
              htmlFor="password"
              className="text-[#ACB4B4] cursor-text absolute transition-all left-3 top-4 text-sm
              peer-placeholder-shown:left-3 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base 
                peer-focus:text-sm peer-focus:top-4 "
            >
              Password
            </label>
            {errors.password && touched.password ? (
              <p className="text-red-600 tracking-wider text-sm font-[250px] -mt-3 mb-2.5">
                {errors.password}
              </p>
            ) : null}
          </div>
          {firebaseError ? (
            <p className="text-red-600 tracking-wider text-sm font-[250px]">
              {firebaseError}
            </p>
          ) : null}
          <button
            // form validation using regex and useRef onClick={handleForm}
            name="Signbtn"
            className="my-3 hover:bg-[#c1111a] rounded w-[19rem] p-2  bg-[#e50914] text-white font-medium active:bg-[#c1111acc]"
            type="submit"
            onClick={handleForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h1 className=" my-5 text-[#AFAFB0]">
            {isSignInForm ? "New to Proflix? " : "Already a User? "}
            <span
              onClick={toggleSignInForm}
              className="font-medium text-white hover:underline hover:cursor-pointer"
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
