import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Dashboard from "./user/UserDashboard";

const RoutesComponent = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/dashboard" element={<PrivateRoute />} />
        <Route path="/admin/dashboard" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
