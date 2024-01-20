import React, { useState, useEffect } from "react";
import { Navbar, Dashboard, Sidebar } from "./index.js";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Feed = () => {
  const [message, setMessage] = useState();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("/home/feed")
      .then((res) => {
        console.log(res);
        const { message } = res.data;
        if (res.status === 200) {
          setMessage(message);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(" error loading the page ", err);
        navigate("/");
      });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100 flex-row justify-start">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-500">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Welcome to Opnion App</h1>
            <h2>{message}</h2>
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feed;
