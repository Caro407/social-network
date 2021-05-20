import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const UpdateProfile = () => {
  const userInfos = useSelector(state => state.user);
  const [updateStatus, setStatus] = React.useState('')

  const updateUser = (event) => {
    event.preventDefault();
    let values = Object.fromEntries(new FormData(document.querySelector('form')));

    fetch(`http://localhost:1337/users/me`, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
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
        setStatus('update_done');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={updateUser} className="container">
      <label>Email</label>
      <input name="email" value={userInfos.email}/>
      <br/>
      <br/>
      <label>Description</label>
      <input name="description"/>
      <br/>
      <br/>
      <input type="submit" value="Submit" />
      {(updateStatus === 'update_done') ? <Redirect to={{pathname: '/profile'}} /> : <p></p> }
    </form>
  )
};

export default UpdateProfile;
