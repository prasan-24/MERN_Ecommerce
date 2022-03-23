import React, { useState } from "react";
import Layout from "../core/Layout";

import { makeStyles } from "@mui/styles";

import { Navigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import { doSignin , aunthenticate , isAuthenticated } from "../auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",

    "& .MuiTextField-root": {
      margin: "16px",
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: "16px",
    },
  },
}));

export default function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;

  const { user }= isAuthenticated();

  const classes = useStyles();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const userSignin = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    doSignin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        aunthenticate(data,()=>{
          setValues({ ...values, redirectToReferrer: true });
        })
      }
    });
  };

  function showError() {
    return <div style={{ display: error ? "" : "none" }}>{error}</div>;
  }

  const showLoading = () => {
    loading && (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if(user && user.role === 1){
        return <Navigate to={"/admin/dashboard"} />
      } else {
        return <Navigate to="/user/dashboard" />;
      }
      
    }
  };

  function signInForm() {
    return (
      <React.Fragment>
        <div className="flex min-h-screen bg-white">
          <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Sign In
              </h1>
            </div>
            <form action="#" className="p-0">
              <div className="mt-5">
                <input
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Email"
                  onChange={handleChange("email")}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Password"
                  onChange={handleChange("password")}
                />
              </div>

              <div className="mt-10">
                <input
                  type="submit"
                  onClick={userSignin}
                  value="Sign In"
                  className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
                />
              </div>
            </form>
            <a className="" href="/login" data-test="Link">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Don't have account ? Sign up
              </span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <Layout
      title="Sign In"
      description="Sign in your account"
      className="container"
    >
      {showError()}
      {showLoading()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  );
}
