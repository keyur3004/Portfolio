import React from "react";
import Particle from "../Particle";
import Home1 from "./Home1";
import "../../style.css";

function Home() {

  return (
    <section className="homeBackground container-fluid">
      <Particle />
      <Home1 />
    </section>
  );
}

export default Home;
