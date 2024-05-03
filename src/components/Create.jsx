import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [Input, setInput] = useState("");
  const [text, setText] = useState("");
  const [detail, setDetail] = useState({ head: "", poem: "", id: "" });
  const submitBtn = (e) => {
    e.preventDefault();
    setDetail({
      head: Input,
      poem: text,
      email: user.email,
    });
    setInput("");
    setText("");
  };
  useEffect(() => {
    const createUser = async () => {
      if (user) {
        try {
          const res = await axios.post(
            "http://localhost:5000/api/saveDetail",
            detail
          );
          if (res.status === 200) {
            navigate("/");
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    createUser();
  }, [detail]);
  return (
    <div className="flex flex-col  lg:flex-row items-center justify-evenly">
      <div className="w-96 mt-8 lg:mt-0">
        <h1 className="text-4xl mb-5 lg:mb-10">Share Your Poetry</h1>
        <h4 className="text-xl">
          Let your imagination soar and pour your emotions onto the page through
          poetry. Whether it's a tale of love, a reflection on nature, or a
          glimpse into the depths of your soul, every poem is a unique
          expression of the human experience. Take a moment to pen down your
          thoughts, feelings, and dreams, and then share them with us.
        </h4>
      </div>
      <Form
        Input={Input}
        setInput={setInput}
        text={text}
        setText={setText}
        submitBtn={submitBtn}
      />
    </div>
  );
};
export default Create;
