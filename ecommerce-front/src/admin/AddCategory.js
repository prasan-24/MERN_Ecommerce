import React, { useState } from "react";

import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return <div>{name} is created</div>;
    }
  };

  const showError = () => {
    if (error) {
      return <div>{error} is should be unique</div>;
    }
  };

  const newCategoryForm = () => {
    return (
      <div className="flex min-h-screen bg-white">
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className=" text-gray-800 text-3xl font-medium">
              Add Category
            </h1>
          </div>
          <form action="#" className="p-0">
            <div className="mt-5">
              <input
                type="text"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="mt-10">
              <input
                type="submit"
                onClick={clickSubmit}
                value="Create Category"
                className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
              />
            </div>
          </form>
          <div>
            {showSuccess()}
            {showError()}
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>{newCategoryForm()}</React.Fragment>;
};

export default AddCategory;
