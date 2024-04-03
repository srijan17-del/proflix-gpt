// export const checkValidation = (FirstName, LastName, email, password) => {
//   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
//     email
//   );
//   const isPasswordValid =
//     /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.test(
//       password
//     );
//   const isFirstNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(FirstName);
//   const isLastNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(LastName);

//   if (!isEmailValid) return "Email Id is not valid";
//   if (!isPasswordValid) return "Password is not valid";
//   if (isFirstNameValid) return "Name is not valid";
//   if (isLastNameValid) return "Name is not valid";

//   return null;
// };
