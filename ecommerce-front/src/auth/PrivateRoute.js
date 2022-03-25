import React, { Component , useEffect } from "react";
import { Route, useNavigate, Redirect , Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

import Dashboard from "../user/UserDashboard";

const PrivateRoute = () => {

  // const navigate = useNavigate();

  // function redictToSignIn() {
  //   console.log('testtesttest');
  //   return 
  // }

  //navigate('/signin')}

  return <>{isAuthenticated() ? <Dashboard /> : <Navigate to={'/signin'} />} </>;
};

export default PrivateRoute;
