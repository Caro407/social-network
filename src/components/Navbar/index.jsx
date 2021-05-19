import React from 'react';
import VisitorNavbar from './../VisitorNavbar';
import LoggedInNavbar from './../LoggedInNavbar';
import Cookies from 'js-cookie';
import { authUser } from './../../redux/index';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const is_connected = useSelector(state => state.is_connected);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkAuthStatus = () => {
      let authCookie = Cookies.get('token');
      if(authCookie) {
        dispatch(authUser());
      };
    };
    checkAuthStatus();
  }, []);

  return (
    <nav className="h-10 w-full border-b border-1 my-2">
      <div>
        {is_connected ? <LoggedInNavbar/> : <VisitorNavbar/>}
      </div>
    </nav>
  )
}

export default Navbar;
