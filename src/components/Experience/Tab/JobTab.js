import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import JobList from "../List/JobList";
import JobContent from "../Content/JobContent";
import "./JobTab.css";

function JobTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
    <Container className="section__Jobs-container">
      <Row>
        <div className="jobDetails">
        <Col sm="3">
          <div className="section__Jobs-styledTab">
            <ul className="section__Jobs-styledTabList">
              {props.data.map((job, index) => (
                <JobList
                  key={index}
                  onClick={btnClick}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
        </Col>
        <Col sm="9">
          {props.data.map((job, index) => (
            <JobContent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </Col>
        </div>
      </Row>
      <span
        className={
          activeTabId === 0
            ? "index1-chosen"
            : activeTabId === 1
            ? "index2-chosen"
            : activeTabId === 2
            ? "index3-chosen"
            : activeTabId === 3
            ? "index4-chosen"
            : "index5-chosen"
        }
      >
        &nbsp;
      </span>
    </Container>
  );
}

export default JobTab;
