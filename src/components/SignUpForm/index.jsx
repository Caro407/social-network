import React from 'react';
import Cookies from 'js-cookie';

const Form = () => {
  const [formStatus, setStatus] = React.useState('');

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
        console.log(response);
        Cookies.set('token', response.jwt);
        setStatus("You are logged in.");
        window.location = "/home"
      })
      .catch(error => {
        console.log(error);
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
        <br/>
        <label>email</label>
        <input name="email"/>
        <br/>
        <br/>
        <label>Password</label>
        <input name="password"/>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form;
