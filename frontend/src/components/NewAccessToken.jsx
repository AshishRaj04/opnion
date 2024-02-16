import React, { useEffect, useState } from "react";
import axios from "axios";

const NewAcessToken = () => {
  const generateToken = (e) => {
    e.preventDefault();
    console.log("Generate Token Clicked");
    const configuration = {
      method: "GET",
      url: "/api/v1/refreshToken",
    };
    try {
      axios(configuration).then((res) => console.log(res.data));
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <div>
      <h1>Generate New Access Token</h1>
      <button
        className="px-4 py-2 bg-slate-400 rounded-md "
        onClick={generateToken}
      >
        Generate Token
      </button>
      
    </div>
  );
};

export default NewAcessToken;
