import { useState, useEffect } from "react";
import axios from "axios";
const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  // Fetch tweets on component mount and update state with the fetched data.
  useEffect(() => {
    const getTweetsFun = async () => {
      const configuration = {
        method: "GET",
        url: "/home/getTweets",
      };
      await axios(configuration).then((response) => {
        setTweets(response.data);
      });

    };

    getTweetsFun()
  }, []);
  return <div>{tweets}</div>;
};

export default Tweets;
