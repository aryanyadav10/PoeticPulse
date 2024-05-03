import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Item = ({ data, edit, remove }) => {
  const navigate = useNavigate();
  const id = data._id;
  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this poem?")) {
      try {
        const res = await axios.delete("http://localhost:5000/api/deletePoem", {
          params: { id },
        });
        if (res.status === 200) {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-full sm:w-96 flex flex-col text-center gap-3 mr-8 m-1 lg:ml-2 mx-auto border border-black">
      {edit && remove ? (
        <div className="flex justify-start mt-2">
          <Link
            to={"/edit"}
            state={{ data }}
            className="mx-2 bg-black text-white px-2 rounded-sm hover:opacity-75"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="mx-2 bg-black text-white px-2 rounded-sm hover:opacity-75"
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
      <div>
        <h1 className="text-2xl pt-3">{data.head}</h1>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm m-3">{data.poem}</h3>
        <p className="text-xs m-3">{data.email}</p>
      </div>
    </div>
  );
};
export default Item;
