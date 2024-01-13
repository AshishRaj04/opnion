import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    const configuration = {
      method: "post",
      url: "/api/v1/registerUser",
      data: data,
    };
    try {
      await axios(configuration).then((result) => {
        setIsRegistered(true);
      });
    } catch (error) {
      console.log("Error occuring while registering the user : ", error);
    }
  };
  return (
    <div>
      <p>Register</p>

      <form onSubmit={handelSubmit}>
        <label>usename : </label>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="my-2 text-slate-900"
          value={data.username}
          onChange={handleChange}
        ></input>
        <br />

        <label>email : </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="my-2  text-slate-900"
          value={data.email}
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

        <label>Full-Name: </label>
        <input
          type="text"
          placeholder="fullname"
          name="fullName"
          className="my-2  text-slate-900"
          value={data.fullName}
          onChange={handleChange}
        ></input>
        <br />
        <button
          className="py-2 px-4 rounded-xl bg-slate-300 text-slate-900"
          type="submit"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
      <div>
        {isRegistered ? (
          <p className="text-green-500">
            User Registered Successfully! Please login to continue.
          </p>
        ) : (
          <p className="text-red-500">You are not Registered</p>
        )}
      </div>
    </div>
  );
};

export default Register;
