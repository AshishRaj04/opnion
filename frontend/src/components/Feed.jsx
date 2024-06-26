import React, { useState, useEffect } from "react";
import { Dashboard } from "./index.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [isAuthenticated, SetisAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [fullName, setFullName] = useState();
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userDataString = searchParams.get("userData");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/home/feed", {
          withCredentials: true,
        });
        if (response.status === 200) {
          console.log(userDataString);
          SetisAuthenticated(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError(error.message);
          navigate("/login");
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex h-screen bg-gray-100 flex-row justify-start">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-500">
          <div className="container mx-auto p-4">
            {isAuthenticated ? (
              <Dashboard id={userDataString} />
            ) : (
              <p>{error}</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feed;