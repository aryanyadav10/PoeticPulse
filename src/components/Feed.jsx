import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
const Feed = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/getDetail");
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFeed();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 m-5">
      {details.map((item, index) => {
        return <Item key={index} data={item} />;
      })}
    </div>
  );
};
export default Feed;
