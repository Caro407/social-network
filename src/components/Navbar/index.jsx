import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="h-10 w-full border-b border-1 my-2">
      <div>
        <Link to="/home" className="mx-2">Accueil</Link>
        <Link to="/sign-up" className="mx-2">Sign Up</Link>
        <Link to="/log-in" className="mx-2">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar;
