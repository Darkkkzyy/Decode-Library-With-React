// @ts-nocheck

 function Validation(values) {
  let error = {};

  //email and password match
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else {
    error.password = "";
  }
  return error;
}
export default Validation;
