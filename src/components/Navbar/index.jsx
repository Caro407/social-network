import React from 'react';
import VisitorNavbar from './../VisitorNavbar';
import LoggedInNavbar from './../LoggedInNavbar';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const is_connected = useSelector(state => state.is_connected);

  return (
    <nav className="h-10 w-full border-b border-1 my-2">
      <div>
        {is_connected ? <LoggedInNavbar/> : <VisitorNavbar/>}
      </div>
    </nav>
  )
}

export default Navbar;
