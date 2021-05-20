import React from 'react';
import Form from './../../components/LogInForm';
import { Link } from 'react-router-dom';

const LogIn = () => {

  return (
    <div className="container">
      <h2>Please log in to continue !</h2>
      <Form />
      <p>Not registered yet ?</p>
      <Link to="/sign-up" className="mx-2">Please sign up !</Link>
    </div>
  )
};

export default LogIn;
