import { useState, useEffect } from "react";
import axios from "axios";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("/home/getTweets")
      .then((response) => {
        const data = response.data.data;
        console.log(data)
        setTweets(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleLike = async (tweetId) => {
    try {
      const response = await axios.post(`/api/v1/likes/toggle/t/${tweetId}`);
      if (response.data.status === 200) {
        // If tweet is liked
        // You can update the UI to reflect that the tweet is liked
        console.log("Tweet liked");
      } else {
        // If tweet is unliked
        // You can update the UI to reflect that the tweet is unliked
        console.log("Tweet unliked");
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div>
      {tweets.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[70%] mb-4 rounded-md text-center border-y-2 py-6 bg-gray-50 dark:bg-dark-1"
          >
            <p>{item.content}</p>
            <p>{item.owner.fullName}</p>
            <img
              src={item.owner.avatar}
              alt=""
              className="w-8 h-8 rounded-full mx-auto my-3"
            />
            <button className="mx-8 ">💬</button>
            <button className="mx-8 " onClick={() => toggleLike(item._id)}>
              👍
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;
