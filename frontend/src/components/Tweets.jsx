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
        return <ol key={index}>{item.content}</ol>;
      })}
    </div>
  );
};

export default Tweets;
