import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const is_connected = useSelector(state => state.is_connected);

  return (
    <Route
      {...rest}
      render={ props => (
        is_connected ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/log-in" }} />
        )
      )}
    />
  );
};

export default PrivateRoute;
