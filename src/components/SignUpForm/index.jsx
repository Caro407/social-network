import React from 'react';
import Cookies from 'js-cookie';
import { authUser } from './../../redux/index';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

const Form = () => {
  const [formStatus, setStatus] = React.useState('');
  const is_connected = useSelector(state => state.is_connected);
  const dispatch = useDispatch();

  const authentify_user = (event) => {
    let values = Object.fromEntries(new FormData(document.querySelector('form')))

    event.preventDefault();

    fetch("http://localhost:1337/auth/local/register", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then(response => {
        Cookies.set('token', response.jwt);
        setStatus("You are logged in.");
        dispatch(authUser());
      })
      .catch(error => {
        setStatus(error.message);
      })
  }

  return (
    <div>
      <div>
        <p>{formStatus}</p>
      </div>
      <form onSubmit={authentify_user}>
        <label>Username</label>
        <input name="username"/>
        <br/>
        <label>email</label>
        <input name="email"/>
        <br/>
        <label>Password</label>
        <input name="password"/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
      {is_connected && window.location.href.includes('sign') ? <Redirect to={{pathname: '/home'}} /> : <p></p> }
    </div>
  )
}

export default Form;
