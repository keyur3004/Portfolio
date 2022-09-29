import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Keyurtrivedi.pdf";
import { HiDownload } from "react-icons/hi";
import { BsFillPrinterFill } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import cv from "./../../Assets/Keyurtrivedi.pdf";
import { useReactToPrint } from "react-to-print";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://drive.google.com/file/d/1Ebxv7k_ieNwoKphV4C-YeH1vYlFZqrtI/view?usp=sharing";

// https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "space-evenly", position: "relative" }}>
        <Button
          download="Keyurtrivedi"
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <HiDownload />
          &nbsp;Download Resume
        </Button>

        <Button
          variant="primary"
          style={{ maxWidth: "250px" }}
          onClick={handlePrint}
        >
          <BsFillPrinterFill />
          &nbsp; Print Resume
        </Button>
      </Row>

      <Row className="resume">
        <Document file={cv} className="d-flex justify-content-center">
          <Page
            ref={componentRef}
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
          />
        </Document>
      </Row>

      <Row style={{ justifyContent: "space-evenly", position: "relative" }}>
        <Button
          download="Keyurtrivedi"
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
          type="application/pdf"
          rel="preload"
        >
          <HiDownload />
          &nbsp;Download Resume
        </Button>

        <Button
          variant="primary"
          style={{ maxWidth: "250px" }}
          onClick={handlePrint}
        >
          <BsFillPrinterFill />
          &nbsp; Print Resume
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
