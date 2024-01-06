import React, { useState } from "react";
import Axios from "axios";
const Home = () => {
  const url = "http://localhost:4000/home";
  const [tweet, setTweet] = useState(" ");

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);

    setTweet(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tweet || tweet.trim() === "") return;
    // Make a POST request to the server endpoint
    Axios.post(url, {
      content: tweet,
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
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder=""
          onChange={handleChange}
          className="text-slate-800"
          value={tweet}
        />
        <button>POST</button>
      </form>
    </div>
  );
};

export default Home;
