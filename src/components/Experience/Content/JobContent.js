import React from "react";
import "./JobContent.css";

function JobContent(props) {
  let data = props.data.expData;

  return (
    <div
      key={props.index}
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4 style={{color:"#c770f0"}}>{data.position}<h7> @ </h7><p className="hover-underline-animation"><h4><a style={{color: "white" , textDecoration : "none"}} href={data.link}  rel="noopener noreferrer" target="_blank">{data.company}</a></h4></p></h4>
      <h5>{data.period}</h5>
      {data.details.map(detail => (
        <p className="section__Jobs-detail">{detail}</p>
      ))}
    </div>
  );
}

export default JobContent;
