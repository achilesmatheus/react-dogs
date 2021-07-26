import React from "react";
import { Navigate, Route } from "react-router";
import { UserContext } from "../../UserContext";

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  return login === true ? <Route {...props} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
