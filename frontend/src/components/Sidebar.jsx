// Sidebar.js

import React from "react";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const sidebarClasses = `bg-gray-800 text-white h-full w-64 fixed left-0 top-0 overflow-y-auto ${
    isVisible ? "" : "-left-64"
  }`;

  return (
    <div className={sidebarClasses}>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Opnion</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Messages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      <button
        className="fixed top-4 left-64 bg-gray-800 text-white p-2 rounded-full"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
