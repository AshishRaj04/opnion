import React, { useState, useEffect } from "react";
import { Dashboard } from "./index.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get('/home/feed')
        console,log(response.data)
        setMessage(response.data.message);
      }catch(error){
        if(error.response && error.response.status === 401){
          navigate("/newAccessToken")
        }
      }
    }
    fetchData();
  },[])
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
