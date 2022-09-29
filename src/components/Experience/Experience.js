import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
// import charusat from "../../Assets/charusat.png";
// import noble from "../../Assets/noble.png";
// import alpha from "../../Assets/alpha2.png";
// import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Data from "./Data.js";
import JobTab from "./Tab/JobTab";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <span className="dark">My </span>
          <strong className="white">Experience </strong>
        </h1>
        <p className="dark">
          {/* Here are my <span className="white"> education </span> details */}
          Where I have <span className="white"> Worked </span>
        </p>
        <div data-aos="zoom-in" data-aos-easing="ease">
          <JobTab data={Data.jobs} />
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
