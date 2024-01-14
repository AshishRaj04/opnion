import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState(null);
    axios.defaults.withCredentials = true
  useEffect(() => {
    axios
      .get("/dashboard")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  });
  return <div>Dashboard</div>;
};

export default Dashboard;
