import React, { useState } from "react";
import Layout from "../core/Layout";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import { doSignUp } from "../auth";

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

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const classes = useStyles();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const userSignUp = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    doSignUp({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  function showError() {
    return <div style={{ display: error ? "" : "none" }}>{error}</div>;
  }

  function showSuccess() {
    return <div style={{ display: success ? "" : "none" }}>{error}</div>;
  }

  function signUpForm() {
    return (
      <form className={classes.root}>
        <TextField
          label="Name"
          onChange={handleChange("name")}
          variant="outlined"
          required
          value={name}
        />
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
      {showSuccess()}
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
}
