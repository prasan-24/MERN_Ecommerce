import React from "react";

import Layout from "../core/Layout";

import { isAuthenticated } from "../auth";

import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            User Links
          </h3>
          <ul className="divide-y divide-gray-300">
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              <Link
                className="hover:text-black transition duration-200 ease-linear"
                to={"/create/category"}
              >
                Create Category
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              <Link
                className="hover:text-black transition duration-200 ease-linear"
                to={"/create/product"}
              >
                Create Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const adminInformation = () => {
    return (
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            Admin Information
          </h3>
          <ul className="divide-y divide-gray-300">
            <li className="p-4 hover:bg-gray-50">{name}</li>
            <li className="p-4 hover:bg-gray-50r">{email}</li>
            <li className="p-4 hover:bg-gray-50">
              {role === 1 ? "Admin" : "Customer"}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const purchaseHistory = () => {
    return (
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            Purchase History
          </h3>
          <ul className="divide-y divide-gray-300">
            <li className="p-4 hover:bg-gray-50">{name}</li>
            <li className="p-4 hover:bg-gray-50r">{email}</li>
            <li className="p-4 hover:bg-gray-50">
              {role === 1 ? "Admin" : "Customer"}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Dashboard" description="User Dashboard">
      <div className="bg-gray-200 grid  dark:bg-gray-800   flex flex-wrap items-center  justify-center">
        <div className=" h-32 overflow-hidden">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full   "
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
        </div>
        <div class="grid grid-cols-5 gap-3 m-auto">
          <div>{adminLinks()}</div>
          <div className="col-span-4">
            <div>{adminInformation()}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
