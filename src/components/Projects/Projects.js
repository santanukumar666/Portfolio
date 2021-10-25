import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import charity from "../../Assets/Projects/charity.png";
import data from "../../Assets/Projects/data.jpg";
import ethergram from "../../Assets/Projects/ethergram.jpg";
import medico from "../../Assets/Projects/medico.jpg";
import rusty from "../../Assets/Projects/rusty.jpg";
import stockr from "../../Assets/Projects/stockr.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charity}
              isBlog={false}
              title="GENUINE CHARITY APPLICATION"
              description=" Can be used to Prevent Malpractices like Money Laundering through Charity Organizations
              and make their financial transactions more secure.
              Create a Transparent Charity System using Smart Contracts on Ethereum.
              created a Solidity Smart Contract, used web3, ganache-cli, mocha, to test out
              our contract."
              link="https://github.com/Shreyas-Penkar/Genuine-Charity-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockr}
              isBlog={false}
              title="STOCK PREDICTION WEB APPLICATION"
              description=" Used Python, HTML, CSS, Javascript, Flask to create interactive
              front-end. Used Python for implementing Linear Regression to predict the future value of
              the desired Stock with 98.67 percent accuracy .Imported live stock data from Yahoo Finance API."
              link="https://github.com/santanukumar666/StockPredictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medico}
              isBlog={false}
              title="MEDICO BUDDY"
              description=" Flask ML web app which predicts the probability of 4 diseases and medical
              insurance costrequired
              Made an interactive CHATBOT to engage and help the users.
              It employs different ML models to predict the diseases accurately"
              link="https://github.com/santanukumar666/medico-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethergram}
              isBlog={false}
              title="ETHERGRAM"
              description="A good application of Web3.0, made a decentralized version of Instagram running on Ethereum blockchain.
              Create a smart contract with solidity, frontend with ReactJS.
              Connect, storage and get data from IPFS network.(InterPlanetary file system)
              "
              link="https://github.com/santanukumar666/ethergram"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="EDA projects"
              description="I performed indepth Exploratory data analysis of these datasets found on Kaggle and drew insights from it
              ,tried answering some problems and suggested some solutions to it
              and made some visualizations for better understanding."
              link="https://github.com/santanukumar666/data_analysis_projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rusty}
              isBlog={false}
              title="Memepage Website"
              description="Made an responsive website using HTML,CSS and Javascript"
              link="https://github.com/santanukumar666/rusty_battery_memes"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
