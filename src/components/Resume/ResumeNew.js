import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Cv_SokainaDaabal.pdf";
import { AiFillChrome, AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row className="resume">
          <Document className="d-flex justify-content-center" file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}  renderTextLayer={false}/>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", margin: "5px" }}
          >
             <AiFillChrome/>
            
            &nbsp;Offre Job
          </Button>
         <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" , margin: "5px" }}
          >
           <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" , margin: "5px"  }}
          >
            <AiOutlineDownload />
            &nbsp;Download CoverLettre
          </Button>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px",margin: "5px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
