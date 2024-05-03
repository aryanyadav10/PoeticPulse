import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Item from "./Item";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/getProfile",
            {
              params: { email: user.email },
            }
          );
          setDetail(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchProfile();
  }, [isAuthenticated, user]);
  return (
    <>
      <div className="bg-black w-full text-center h-60 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl text-white font-sans italic mb-10">
          Poetry Profile
        </h1>
        <p className="text-white text-sm lg:text-lg">
          Feel free to refine your poems with added depth, or bid farewell to
          any verse that no longer resonates with a click.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 m-5">
        {detail.map((item, index) => {
          return <Item key={index} data={item} edit={true} remove={true} />;
        })}
      </div>
    </>
  );
};
export default Profile;
