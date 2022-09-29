import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { FiExternalLink } from "react-icons/fi";
import { RiBuilding2Fill } from "react-icons/ri";


function EducationCards(props) {
  return (
    <div className="educationCardDiv">
    <Card className="education-card-view">
      <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <RiBuilding2Fill style={{ fontSize: '2em' }} />
        <a
          href={props.link}
          style={{ color: "#c770f0 ", fontSize: '1.2em' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink className="linkIcon" />
        </a>

      </Card.Header>
      <Card.Body>
        <Card.Title style={{fontWeight : '600', paddingBottom : '14px'}}>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className="courier light" style={{ display: 'flex', justifyContent: 'space-between', alignItems : 'flex-end' }}>
          <div>{props.description2}</div>
          <div>{props.description3}</div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
export default EducationCards;
