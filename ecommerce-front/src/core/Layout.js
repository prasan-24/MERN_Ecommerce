import React from "react";

const Layout = ({ title = "Title", description, children , className }) => (
  <div className="lg:flex lg:items-center lg:justify-between">
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;