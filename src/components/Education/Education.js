import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import Particle from "../Particle";
import Aos from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
          <span className="dark">My </span>
          <strong className="white">Education </strong>
        </h1>
        <p className="dark">
          Here are my <span className="white"> education </span> details
        </p>
        <Row style={{ paddingBottom: "50px" }}>
          <Col
            md={4}
            className="education-card dark"
            data-aos="zoom-in"
            data-aos-easing="ease"
          >
            <EducationCard
              isBlog={false}
              // title="Charotar University of Science And Technology"
              title="OM Education"
              description="B.E | Computer Engineering"
              description2="Junagadh"
              description3="2019 - 2022"
              link="http://www.omeducation.edu.in/"
            />
          </Col>

          <Col
            md={4}
            className="education-card"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-easing="ease"
          >
            <EducationCard
              isBlog={false}
              title="Noble Group of Institutions"
              description="Diploma | Computer Engineering"
              description2="Junagadh"
              description3="2014 - 2017"
              link="https://ngivbt.edu.in"
            />
          </Col>

          <Col
            md={4}
            className="education-card"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="ease"
          >
            <EducationCard
              isBlog={false}
              title="Shree D.K. Bharad Vidhya Mandir"
              description2="Junagadh"
              description3="2012 - 2014"
              description="Secondary & Higher Secondary"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
