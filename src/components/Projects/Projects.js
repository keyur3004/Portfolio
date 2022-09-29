import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <span className="dark">My Recent</span>
          <strong className="white"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          <span className="dark">
            {" "}
            Here are some <span className="white">projects</span> I've worked on
            recently.
          </span>
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "27px",
            paddingBottom: "10px",
          }}
        >
          <Col
            md={6}
            className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease"
          >
            <ProjectCard
              isBlog={false}
              title="Online Hardware Store"
              description="Developed a responsive website that provides computer hardware product,A site with functionalities like add product in favorite list also in wishlist,User gets message when ordered a product"
              description2="Core Php HTML CSS Bootstrap"
              // link="https://github.com/abhiapatel/ResumeKeywords"
            />
          </Col>

          <Col
            md={6}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease"
          >
            <ProjectCard
              isBlog={false}
              title="Student E-card Generator"
              description=" Developed a website that provides automatic student Id card generating by
filling a detailed information form,Generates unique barcode for multiple students according student's
enrollment number,Generates professor's Id card also "
              description2="Php Bootsrap HTML CSS"
              // link="https://pmkusum.guvnl.com"
            />
          </Col>

          <Col
            md={6}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease"
          >
            <ProjectCard
              isBlog={false}
              title="City-to-Dial"
              description="A website that provides services for bussiness listing,Designed and developed the project from concept to Build"
              description2="Wordpress Bootsrap HTML CSS"
              // link="https://github.com/abhiapatel/court-case-management-project"
            />
          </Col>

          <Col
            md={6}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="ease"
          >
            <ProjectCard
              isBlog={false}
              title="Course-tip"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              description2="React Bootsrap HTML CSS"
              link="https://github.com/abhiapatel/Course-tip"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
