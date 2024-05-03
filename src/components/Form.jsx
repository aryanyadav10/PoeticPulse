const Form = ({ Input, setInput, text, submitBtn, setText }) => {
  return (
    <div
      className="flex mt-10  items-start lg:items-center lg:mt-0 justify-center"
      style={{ height: "88vh" }}
    >
      <form
        className="w-100 h-100 border border-black p-5"
        onSubmit={submitBtn}
      >
        <div className="flex flex-col gap-10">
          <input
            type="text"
            required
            className="border border-2 border-black text-center py-2"
            placeholder="Heading"
            value={Input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <textarea
            required
            className="border border-2 border-black w-80 h-60 text-center"
            placeholder="Write your poem here!"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="bg-black p-1 text-white rounded-sm mx-20">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
