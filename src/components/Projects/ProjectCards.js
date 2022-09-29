import React from "react";
import Card from "react-bootstrap/Card";
import { FiGithub } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <div className="projectCard">
      <div
        className="white"
        style={{ fontSize: "1.5em", float: "left", paddingLeft: "16px" }}
      >
        {props.title}
      </div>
      <br />
      <div className="project-card">
        <div className="cardBody">
          {/* <Card.Title>{props.title}</Card.Title> */}
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>
        <div
          className="tech courier"
          style={{ textAlign: "justify", color: "#8892b0" }}
        >
          {props.description2}&nbsp;
          {/* <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ color: "#c770f0" }}> <FiGithub className="linkIcon"/></a> */}
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
