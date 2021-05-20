import React from 'react';
import Form from './../../components/SignUpForm';
import { Link } from 'react-router-dom';

const SignUp = () => {

  return (
    <div className="container">
      <h2>Please, sign up to continue.</h2>
      <Form />
      <p>Already registered ?</p>
      <Link to="/log-in" className="mx-2">Please log in !</Link>
    </div>
  )
}

export default SignUp;
