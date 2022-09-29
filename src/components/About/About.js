import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
}, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              // paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <span className="dark">Let me Introduce </span> <strong className="white">MYSELF</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingBottom: "50px", paddingLeft: "30px", borderRadius: "50%" }}
            className="about-img" data-aos="zoom-in" data-aos-easing="ease"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
        <span className="dark">Professional</span> <strong className="white">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="white">Tools</strong> <span className="dark">I use</span>
        </h1>
        <Toolstack />
        
      </Container>
    </Container>
  );
}

export default About;
