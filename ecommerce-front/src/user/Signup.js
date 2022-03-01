import React, { useState } from "react";
import Layout from "../core/Layout";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import { API } from "../config";

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

  const { name, email, password } = values;

  const classes = useStyles();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const doSignUp = (user) => {
    fetch(`${API}/signup`,{
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }).then((response)=>{

    }).catch(err=>{
      
    })
  };

  const userSignUp = (event) => {
    event.preventDefault();
    doSignUp({name,email,password});
  };

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
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
}
