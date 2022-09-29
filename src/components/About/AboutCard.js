import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function AboutCard() {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
}, []);

  return (
    <div className="quote-card-view">
      <div>
        <blockquote className="blockquote mb-0" data-aos="fade-up" data-aos-easing="ease">
          <p className="light" style={{ textAlign: "justify" }}>
            Hello! My name is <span className="white">Keyur Trivedi </span> and  I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom web pages — turns out hacking together a custom UI taught me a lot about HTML & CSS!
          </p>       

          <p className="light" style={{ textAlign: "initial" }} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease">
            Currently I am working on few Technologies like
              <span className="white courier">  React.js, Node.js, JavaScript(ES6), HTML and CSS </span>
              <br />
              <br />
          </p>

          <p className="dark courier" style={{ wordSpacing : "-5px"}} data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease">
            "There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for."{" "}
          </p>
          <footer className="blockquote-footer courier">Keyur</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
