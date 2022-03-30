import React, { Component, useEffect } from "react";
import { Route, useNavigate, Redirect, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

import Dashboard from "../user/AdminDashboard";

const AdminRoute = () => {
  return (
    <>
      {isAuthenticated() && isAuthenticated().user.role === 1 ? (
        <Dashboard />
      ) : (
        <Navigate to={"/signin"} />
      )}{" "}
    </>
  );
};

export default AdminRoute;
