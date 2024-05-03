import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      axios
        .post("http://localhost:5000/api/saveUser", { email: user.email })
        .then((res) => {
          console.log("Req sent!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated, user]);

  return (
    <nav className="flex text-white justify-between py-5 bg-black border-b border-white">
      <Link to="/" className="text-white mx-5 text-xl lg:text-2xl italic">
        PoeticPulse
      </Link>
      <div className="mr-2 mt-1">
        {isAuthenticated ? (
          <div className="flex gap-3 md:gap-5">
            <Link to="/create" className="mx-1 px-1">
              Create
            </Link>
            <button type="button" onClick={(e) => logout()} className="mb-1">
              Sign Out
            </button>
            <Link className="mx-1 px-1" to="/profile">
              Profile
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={(e) => loginWithRedirect()}
              className="mx-5 text-white "
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
