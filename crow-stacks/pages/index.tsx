import type { NextPage } from "next";
import Form from "../components/Form";

// Test commit

const Home: NextPage = () => {
  return (
    <div className="items-center justify-center h-screen w-screen flex flex-col animate-fade-in-down">
      <h1 className="text-3xl font-bold underline">CROW</h1>
      <Form />
      <div></div>
    </div>
  );
};

export default Home;
