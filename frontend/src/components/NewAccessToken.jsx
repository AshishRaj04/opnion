import React, { useEffect, useState } from "react";
import axios from "axios";

const NewAcessToken = () => {
  const [message, setMessage] = useState({});
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/refreshToken"
        );
        const { accessToken, refreshToken } = response.data;
        setMessage(
          `New Access Token is ${accessToken} and new Refresh Token is ${refreshToken}`
        );
        // Store the new tokens in your application state or context
        // You can use your state management library or context API for this
        console.log("New Access Token:", accessToken);
        console.log("New Refresh Token:", refreshToken);
      } catch (error) {
        // Handle errors, e.g., redirect to login page
        console.error("Error refreshing access token:", error.message);
      }
    };

    // Call the function to refresh the access token
    refreshAccessToken();
  }, []); // Run once when the component mounts

  return (
    <div>
      <h1>NewAcessToken</h1>
      <p>{message}</p>
    </div>
  );
};

export default NewAcessToken;
