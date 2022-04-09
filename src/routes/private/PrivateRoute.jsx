import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  const user = useSelector(state => state);
  const location = useLocation();
  return user.user  ? (
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
