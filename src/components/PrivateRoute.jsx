import React from "react";
import { Route, Redirect } from "react-router-dom";

let redirectPath = "/AccessDenied";
let shouldLoadComponent = true;


// Routes require the following
// authentication
// prop allRoles or one ore more of the following
// systemAdmin
// sponsor

// Specify the target component using the prop component

const PrivateRoute = ({ Component, ...rest }) => {
  const { component, authentication, ...routeProps } = rest;
  if (typeof component !== "undefined") {
    throw new Error("Do not use the `component` prop of <PrivateRoute/>. The correct prop is `Component` (note the capital C).");
  }

  const { authed, user } = authentication;
  redirectPath = "/example";

  if (!authed) {
    shouldLoadComponent = false;
  }
  else if (authed) {
    if (routeProps.allRoles) {
      shouldLoadComponent = true;
    }
  } else {
    shouldLoadComponent = (authed === true);
  }

  return (
    <Route
      {...routeProps}
      render={props => {
        return shouldLoadComponent ?
          (<Component {...routeProps} {...props} />)
          :
          (<Redirect to={{ pathname: redirectPath, state: { from: props.location } }} />)
      }
      }
    />
  );
};

export default (PrivateRoute);
