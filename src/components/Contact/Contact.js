import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aos from "aos";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
          <span className="dark"> Contact </span>
          <strong className="white"> ME </strong>
        </h1>
        <p className="dark">
          Feel free to <span className="white"> Contact </span>
        </p>

        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            paddingTop: "50px",
          }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "60px",
            }}
          >
            <h3 style={{ fontSize: "1.50rem", paddingTop: "20px" }}>
              <span className="light" data-aos="fade-up" data-aos-easing="ease">
                I am available on below social media. You can message me, my
                inbox is always open. I’ll try my best to get back to you!
              </span>
            </h3>

            <ul className="contact-social-links" style={{ paddingTop: "65px" }}>
              <li
                className="social-icons"
                data-aos="fade-up"
                data-aos-easing="ease"
              >
                <a
                  href="https://github.com/keyur3004"
                  target="_blank"
                  rel="noreferrer"
                  className="gitHub contact-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li
                className="social-icons"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-easing="ease"
              >
                <a
                  href="https://www.linkedin.com/in/keyurtrivedi3004/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedIn contact-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li
                className="social-icons"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease"
              >
                <a
                  href="mailto:keyurtrivedi3004@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="envelope contact-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
