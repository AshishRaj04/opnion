import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registration } from "../assets/index.js";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    avatar: null,
    coverImage: null,
  });
  const [message, setMessage] = useState(null);
  const [progress, setProgress] = useState({ started: false, percentage: 0 });

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    console.log(files);
    setData((prevState) => ({ ...prevState, [name]: files[0] }));
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!data.avatar || !data.coverImage) {
      setMessage("Avatar and cover image are required fields");
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    setMessage("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    const configuration = {
      url: "/api/v1/registerUser",
      data: formData,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        setProgress((prevState) => {
          return { ...prevState, percentage: progressEvent.progress * 100 };
        });
      },
    };

    try {
      await axios(configuration).then((res) => {
        setMessage("Upload successfull");
        console.log(res.data);
        setIsRegistered(true);
      });
    } catch (error) {
      setMessage("Upload failed");
      console.error("Error occurred while registering the user:", error);
    }
  };

  useEffect(() => {
    if (isRegistered) {
      navigate("/login");
    }
  }, [isRegistered]);

  return (
    <div className="bg-[#f1f5f9] w-full h-[100dvh] flex justify-center items-center ">
      <div className="bg-bglight px-14 py-10 border rounded-xl shadow-xl w-3/4  flex flex-row justify-between gap-6">
        <div className="">
          <p className="text-2xl font-semibold text-slate-700 font-poppins mb-7 border-b">
            Registeration
          </p>
          <form onSubmit={handelSubmit}>
            <div>
              <div>
                <label className="text-lg text-slate-500 font-[400]">
                  username :{" "}
                </label>
              </div>

              <input
                type="text"
                placeholder="username"
                name="username"
                className="my-2 text-slate-900 rounded-sm bg-slate-100 py-2 px-3"
                value={data.username}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <div>
                <label className="text-lg text-slate-500 font-[400]">email : </label>
              </div>
              
              <input
                type="email"
                placeholder="email"
                name="email"
                className="my-2 text-slate-900 rounded-sm bg-slate-100 py-2 px-3"
                value={data.email}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <div>
                <label  className="text-lg text-slate-500 font-[400]">password : </label>
              </div>
              
              <input
                type="password"
                placeholder="password"
                name="password"
                className="my-2 text-slate-900 rounded-sm bg-slate-100 py-2 px-3"
                value={data.password}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <div>
                <label className="text-lg text-slate-500 font-[400]">Full-Name: </label>
              </div>
              
              <input
                type="text"
                placeholder="fullname"
                name="fullName"
                className="my-2 text-slate-900 rounded-sm bg-slate-100 py-2 px-3"
                value={data.fullName}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <div>
                 <label className="text-lg text-slate-500 font-[400]">Avatar: </label>
              </div>
             
              <input
                type="file"
                name="avatar"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
              />
            </div>

            <div>
              <div>
                <label className="text-lg text-slate-500 font-[400]">Cover Image: </label>
              </div>
              
              <input
                type="file"
                name="coverImage"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
              />
            </div>
            <button
              className="py-2 px-4 rounded-xl bg-slate-300 text-slate-900"
              type="submit"
              onClick={handelSubmit}
            >
              Submit
            </button>
          </form>
          <div>
            {progress.started && (
              <progress max="100" value={progress.percentage} />
            )}
            {message && <span>{message}</span>}
          </div>
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

        <div className="">
          <img src={registration} alt="registration" className="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
