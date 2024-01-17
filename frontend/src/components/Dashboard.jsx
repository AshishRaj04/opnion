import { useState, useEffect } from "react";
import Axios from "axios";

const Dashboard = () => {
  const url = "/home/postTweet";
  const [tweet, setTweet] = useState(" ");

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);

    setTweet(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tweet || tweet.trim() === "") return;

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
      <p>Tweet your Opnion</p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          className="text-slate-800 block w-[400px] h-40 outline-none rounded-md my-8"
          value={tweet}
        />
        <button className="px-4 py-2 rounded-3xl bg-blue-700 font-bold text-center">
          POST
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
// {"_id":{"$oid":"659edfeb9d90417a8f6b9112"},"username":"ashishraj","email":"ar3243@gmail.com","fullName":"Ashish Raj","password":"$2b$10$Q0TkVvLr4ZS.ng.LxT1heewv7YB8BkkdxIHdTtAoXWswRLlPp.RuC","avatar":"http://res.cloudinary.com/dy9qlasxz/image/upload/v1704910824/mrhgukiizksnac9ob5vj.jpg","coverImage":"http://res.cloudinary.com/dy9qlasxz/image/upload/v1704910828/uf1e96wsh7ye74du5lxi.jpg","createdAt":{"$date":{"$numberLong":"1704910827398"}},"updatedAt":{"$date":{"$numberLong":"1705419973963"}},"__v":{"$numberInt":"0"},"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllZGZlYjlkOTA0MTdhOGY2YjkxMTIiLCJpYXQiOjE3MDU0MTk5NzMsImV4cCI6MTcwNTQyMDI3M30.e24hN-J5qzBxfaPhMjlFUkrwWSMaOBnpYZ6Qz7sNCRQ"}
