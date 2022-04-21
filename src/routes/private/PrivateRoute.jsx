import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  const user = useSelector(state => state.user);
  const location = useLocation();
  return user?.isAuthenticated  ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: {
          from: location.pathname
        }
      }}
    />
  );
};

export default PrivateRoute;
