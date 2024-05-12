import React, { useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
// import Card from "../components/Card";

const Home = () => {
  const [click, setClick] = useState([]);

  return (
    <div className="flex items-start">
      <div>
        <Navbar click={click} setClick={setClick} />
      </div>
      <List click={click} />
    </div>
  );
};

export default Home;
