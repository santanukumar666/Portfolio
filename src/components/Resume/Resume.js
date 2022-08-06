
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from '../../Assets/santanu_Resume.pdf';
import pdf1 from '../../Assets/santanu_Resume_for_DS.pdf';


import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const sem = 4;
  const cgpa = 7.5;


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Data Science Intern [ Crux Intelligence (Fractal Analytics) ]"
              date="June 2022 - August 2022"
              <ul>
                <li> • Worked on the question completion feature of their data informatics product.</li>
                <li>• Performed regular optimization and error analysis on the pipeline to align with the client’s requirements, right from data preparation to model training and evaluation.</li>
                <li>• Carried out iterations of fine-tuning Transformer models for Natural language generation depending on use cases.</li>
              </ul>
              
            /> 
            <Resumecontent
              title="FPGA Developer Intern [ Tata Insitute for Fundamental Research ]"
              date="December 2021 - January 2022"
              content={[
                "• Worked on a customized ZYNQ Board to automate its testing and fixed bugs in the code which writes into the EEPROMs and then reads back using i2c tools.      "   ,
                "• The automation reduced the testing time by 30 %."
              ]}
            />
              
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Represented my school at a district level swimming competition"
            /> 
            <Resumecontent
              title=" Won a university level quiz competition"
            />
              <h3 className="resume-title">Positions of Responsibility</h3>
            <Resumecontent
              content={["Public Relations Head and Former Sponsorship Executive at TECHNOVANZA,VJTI"]}
            /> 
            <Resumecontent
              content={[" Co-Founder and Joint General Secretary at VISHWA Astroclub,VJTI"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Btech Electronics and Telecommunications [ VJTI,Mumbai ] "
              date="2019 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
             <Resumecontent
              title='HSC [ Atomic Energy Central School-4, Mumbai ]'
              date='2017 - 2019'
              content={['Precentage: 92.2%']}
            />
             <Resumecontent
              title='SSC [ Atomic Energy Central School-2,Mumbai ] '
              date='2007 - 2017'
              content={['Precentage: 95.8%']}
             />
            
            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf1} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV for Data science domain
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
