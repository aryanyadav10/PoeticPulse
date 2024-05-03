import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.data._id;
  const data = location.state.data;
  const { user } = useAuth0();
  const [Input, setInput] = useState(data.head || "");
  const [text, setText] = useState(data.poem || "");
  const [detail, setDetail] = useState({ head: "", poem: "", email: "" });

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
    const updatePoem = async () => {
      try {
        const res = await axios.put("http://localhost:5000/api/updatePoem", {
          id,
          detail,
        });
        if (res.status === 200) {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (detail.head !== "" && detail.poem !== "") {
      updatePoem();
    }
  }, [detail]);

  useEffect(() => {
    setInput(data.head || "");
    setText(data.poem || "");
  }, [data.head, data.poem]);

  return (
    <div className="flex flex-col  lg:flex-row items-center justify-evenly">
      <div className="w-96 mt-8 lg:mt-0">
        <h1 className="text-4xl mb-5 lg:mb-10">Edit Your Poetry</h1>
        <h4 className="text-xl">
          Revitalize your verses and breathe new life into your creations.Every
          word, every line, holds the potential for evolution and growth. Unlock
          the power of editing as you fine-tune your expressions, sharpen your
          imagery, and deepen your themes. Embrace the opportunity to polish
          your poetry, to elevate it to new heights of beauty and resonance.
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

export default Edit;
