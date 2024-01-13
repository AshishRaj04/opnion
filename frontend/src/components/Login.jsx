import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const configuration = {
      method: "POST",
      url: "/api/v1/login",
      data: data,
    };
    try {
      await axios(configuration).then((result) => {
        setIsLoggedIn(true);
      });
    } catch (error) {
      console.log("Error occured while logging the user");
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>email : </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="my-2  text-slate-900"
            value={data.password}
            onChange={handleChange}
          ></input>
          <br />

          <label>password : </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="my-2  text-slate-900"
            value={data.password}
            onChange={handleChange}
          ></input>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
      <div>
        {isLoggedIn ? (
          <p className="text-green-500">You Are Logged in Successfully</p>
        ) : (
          <p className="text-red-500">You Are Not Logged in</p>
        )}
      </div>
    </>
  );
};

export default Login;
