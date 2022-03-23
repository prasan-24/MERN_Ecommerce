import React from "react";
import { Link , Navigate } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/index";

const Menu = ({ history }) => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/user/dashboard"
              >
                Dashboard
              </Link>
              {!isAuthenticated() && (
                <React.Fragment>
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
                </React.Fragment>
              )}
              {isAuthenticated() && (
                <span
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => {
                    signout(() => {
                      return <Navigate to={'/'} />
                    });
                  }}
                >
                  Sign out
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Menu;
