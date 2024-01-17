import { useState, useEffect } from "react";
import { Navbar, Dashboard, Sidebar } from "./index.js";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Feed = () => {
    const [message , setMessage] = useState()
    const navigate = useNavigate()
     Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:4000/home/feed")
      .then((res) => {
        if (res.status === 200) {
          setMessage("done");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(" error loading the page ", err);
        navigate("/");
      });
  }, []);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
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
