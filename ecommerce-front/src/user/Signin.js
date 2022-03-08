import React, { useState } from "react";
import Layout from "../core/Layout";

import { makeStyles } from "@mui/styles";

import { Navigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import { doSignin } from "../auth";

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

  const classes = useStyles();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const userSignUp = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    doSignin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({ ...values, redirectToReferrer: true });
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
      return <Navigate to="/" />;
    }
  };

  function signUpForm() {
    return (
      <form className={classes.root}>
        <TextField
          label="Email"
          onChange={handleChange("email")}
          variant="outlined"
          type="email"
          required
          value={email}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={handleChange("password")}
          required
          value={password}
        />
        <div>
          <Button
            type="submit"
            onClick={userSignUp}
            variant="contained"
            color="primary"
          >
            Signup
          </Button>
        </div>
      </form>
    );
  }

  return (
    <Layout
      title="Sign Up"
      description="Register Your Account"
      className="container"
    >
      {showError()}
      {showLoading()}
      {signUpForm()}
      {redirectUser()}
      {JSON.stringify(values)}
    </Layout>
  );
}
