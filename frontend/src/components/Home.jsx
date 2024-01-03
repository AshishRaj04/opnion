import { useState, useEffect } from "react";

const Home = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/");
        const data = await response.json();
        setBackendData(data);
      } catch (err) {
        console.log("Failed to fetch data :- " + err);
      }
    };
    fetchData()
    console.log(backendData)
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      {backendData.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.jokeName}</h2>
            <p>{item.joke}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
