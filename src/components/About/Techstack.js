import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMysql } from "react-icons/di";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import {
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <br/>
        <strong className="main-name display-6">Html5</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br/>
        <strong className="main-name display-6">Javascript</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br/>
        <strong className="main-name display-6">Node.js</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <br/>
        <strong className="main-name display-6">Css3</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <br/>
        <strong className="main-name display-6">Mongodb</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br/>
        <strong className="main-name display-6">React</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <br/>
        <strong className="main-name display-6">Bootstrap</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <br/>
        <strong className="main-name display-6">Express.js</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <br/>
        <strong className="main-name display-6">Python</strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <br/>
        <strong className="main-name display-6">Mysql</strong>
      </Col>
    </Row>
  );

}

export default Techstack;
