import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { disconnectUser } from './../../redux/index';
import { useDispatch } from 'react-redux';

const LoggedInNavbar = () => {
  const dispatch = useDispatch();

  const deleteUserSession = (event) => {
    event.preventDefault();
    Cookies.remove('token');
    dispatch(disconnectUser());
  };

  return (
    <nav className="h-10 w-full border-b border-1 my-2">
      <div>
        <Link to="/home" className="mx-2">Accueil</Link>
        <Link to="/profile" className="mx-2">Profile</Link>
        <button onClick={deleteUserSession} className="btn">Disconnect</button>
      </div>
    </nav>
  )
}

export default LoggedInNavbar;
