import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm a Pre Final Year Undergraduate student in Electronics and Telecommunication at <span className="purple">Veermata Jijabai Technological Institute </span>
             <span className="purple"> ,Mumbai, India.</span>
            <br />I'm deeply passionate about<span className="purple"> Machine Learning</span> and innovations in the field. Currently learning about <span className="purple">Blockchain</span> and <span className="purple">Deep Learning</span>. I have also done some work on <span className="purple"> Data science and analysis</span>.
            <br />
            <br />
            Apart from coding,I am into 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching movies and TV shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about International relations and affairs
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
