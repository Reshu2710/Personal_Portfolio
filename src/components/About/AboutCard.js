import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Reshu Sharma </span>
            from <span className="purple"> Greater Noida, Uttar Pradesh.</span>
            <br />Currently I'm pursuing B.Tech in Computer Science and Engineering from
            Noida Institute of Engineering and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight />Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Reshu</footer>
        </blockquote>
        <br/>
        <br/>
        <br/>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
