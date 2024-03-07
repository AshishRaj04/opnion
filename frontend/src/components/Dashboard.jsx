import { useState, useEffect } from "react";
import { Tweets } from "./index.js";
import Axios from "axios";

const Dashboard = (props) => {
  const url = "/home/postTweet";
  const [tweet, setTweet] = useState(" ");

  const handleChange = (event) => {
    const { value } = event.target;
    setTweet(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tweet || tweet.trim() === "") return;

    Axios.post(url, {
      content: tweet,
      owner: props.id,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p>Tweet your Opnion</p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          className="text-slate-800 block w-[400px] h-40 outline-none rounded-md my-8"
          value={tweet}
        />
        <button className="px-4 py-2 mb-3 rounded-3xl bg-blue-700 font-bold text-center">
          POST
        </button>
      </form>
      <div>
        <Tweets />
      </div>
    </div>
  );
};

export default Dashboard;
