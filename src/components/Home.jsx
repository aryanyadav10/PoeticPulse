import Feed from "./Feed";
const Home = () => {
  return (
    <>
      <section className=" bg-black w-full text-center h-60 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl text-white font-sans italic">
          Welcome!
        </h1>
        <br />
        <p className="text-white text-sm lg:text-lg">
          Welcome to PoeticPulse, where words dance and emotions flow freely.
        </p>
      </section>
      <Feed />
    </>
  );
};
export default Home;
