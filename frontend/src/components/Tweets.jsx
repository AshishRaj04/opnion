import { useState, useEffect } from "react";
import axios from "axios";
const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("/home/getTweets")
      .then((tweets) => {
        const data = tweets.data.data;

        setTweets(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {tweets.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[70%] mb-4 rounded-md text-center border-y-2 py-6 bg-gray-50 dark:bg-dark-1"
          >
            <p>{item.content}</p>
            <button className="mx-8 ">💬</button>
            <button className="mx-8 ">👍</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;