import React from "react";
import { Link } from "react-router-dom";

import { signout } from "../auth/index";

const Menu = ({ history }) => (
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <Link
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/signin"
              >
                Sign in
              </Link>
              <Link
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/signup"
              >
                Sign Up
              </Link>
              <span
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={()=>{
                  signout(()=>{
                    history.push("/");
                  })
                }}
              >
                Sign out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Menu;
