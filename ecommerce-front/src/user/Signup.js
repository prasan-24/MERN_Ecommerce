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
      <React.Fragment>
      <div class="flex min-h-screen bg-white">       
        <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div class="text-left p-0 font-sans">
            <h1 class=" text-gray-800 text-3xl font-medium">Create an account</h1>
          </div>
          <form action="#" class="p-0">
            <div class="mt-5">
              <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" onChange={handleChange("name")} placeholder="Name" />
            </div>
            <div class="mt-5">
              <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" placeholder="Email" onChange={handleChange("email")} />
            </div>
            <div class="mt-5">
              <input type="password" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" placeholder="Password" onChange={handleChange("password")} />
            </div>

            <div class="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
              <input type="checkbox" class="inline-block border-0 " />
              <span display="inline" class="">By creating an account you are agreeing to our 
                <a class="" href="/s/terms" target="_blank" data-test="Link">
                <span class="underline ">Terms and Conditions</span> </a> and
              <a class="" href="/s/privacy" target="_blank" data-test="Link">
                <span class="underline">Privacy Policy</span> </a>
              </span>
            </div>

            <div class="mt-10">
              <input type="submit" onClick={userSignUp} value="Sign up with email" class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600" />
            </div>
          </form>
          <a class="" href="/login" data-test="Link" ><span class="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a>
        </div>
      </div>
      </React.Fragment>
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
    </Layout>
  );
}
