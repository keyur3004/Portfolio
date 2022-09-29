import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Earth from "../Earth/Earth";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          {/* <p><i className="courier" style={{ color: 'grey', fontSize: "1rem" }}> &#123;&#47;&#42; Click on the Galaxy & make your Stars. &#42;&#47;&#125;</i></p> */}
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading courier medium">
                Hi, My name is
                {/* There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> */}
              </h1>

              <h1
                className="heading-name"
                data-aos="fade-up"
                data-aos-easing="ease"
              >
                {/* I'M */}
                <strong> KEYUR TRIVEDI.</strong>
              </h1>

              <h2
                className="sub-heading-name"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* I'M */}
                <strong className="dark"> I build things for the web.</strong>
              </h2>

              <h5
                className="sub-heading-text"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="light">
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building{" "}
                  <span className="white"> web applications.</span>
                </span>
              </h5>

              <div
                className="medium"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{
                  textAlign: "left",
                  fontFamily:
                    '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
                }}
              >
                <Type className="medium" />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
              <div data-aos="fade-up">
                <Earth />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
