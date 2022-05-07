import React, { useState, useEffect } from "react";

import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

import { createProduct } from "./apiAdmin";

const AddProduct = () => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduc: "",
    redirectToProfile: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduc,
    redirectToProfile,
    formData,
  } = values;

  const handleChange = () => {

  }

  const newPostForm = () => {
    return (

      <form action="#" className="p-0">
        <div className="mt-5">
          <label>
            <input className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" onChange={handleChange('photo')} type={"file"} name={"photo"} accept={"image/*"} />
          </label>
        </div>
        <div className="mt-5">
          <input
            type={"text"}
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Name" value={name}
            onChange={handleChange('name')}
          />
        </div>
        <div className="mt-5">
          <textarea
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Description"
            value={description}
            onChange={handleChange('description')}
          />
        </div>
        <div className="mt-5">
          <input
            type={'number'}
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Price" value={price}
            onChange={handleChange('price')}
          />
        </div>
        <div className="mt-5">
          <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label for="frm-whatever" class="sr-only">Category</label>
            <select class="appearance-none w-full py-1 px-2 bg-white" name="whatever" onChange={handleChange('category')} id="frm-whatever">
              <option value="" disabled>Please choose category</option>
              <option value={'616e336b70c9e904e4934a78'} >Node</option>
              <option value={'6243c8926a40e278fec40e56'} >Python</option>
              <option value={'6243c6336a40e278fec40e4f'} >Test Data</option>
            </select>
            <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label for="frm-whatever" class="sr-only">Shipping</label>
            <select class="appearance-none w-full py-1 px-2 bg-white" name="whatever"  onChange={handleChange('shipping')} id="frm-whatever">
              <option value="" disabled>Please choose shipping method</option>
              <option value={'1'} >Yes</option>
              <option value={'0'} >No</option>
            </select>
            <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <input
            type={'number'}
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Qunatity" value={quantity}
            onChange={handleChange('quantity')}
          />
        </div>
        <div className="mt-10">
          <input
            type="submit"
            value="Create Product"
            className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
          />
        </div>
      </form>
    );
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">Add Product</h1>
        </div>
        <div>{newPostForm()}</div>
      </div>
    </div>
  );
};

export default AddProduct;
