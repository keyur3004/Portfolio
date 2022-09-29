import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { VscLinkExternal } from "react-icons/vsc";

function ExperienceCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ justifyContent: "Center" }}>
          {props.description}<br />
          {props.description2}
          {/* {props.description3} */}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <VscLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Visit"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCards;
