import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import note from "../../Assets/Projects/note.png";
import foodi from "../../Assets/Projects/foodi.png";
import ecom from "../../Assets/Projects/ecom.png";
import music from "../../Assets/Projects/music.png";

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
              imgPath={foodi}
              isBlog={false}
              title="Food Delivery App"
              description="Tools used:- HTML, CSS, Bootstrap, JavaScript, React,Node.js,Express.js, MongoDB ."
              describe = "The main aim of the project on online Food Delivery Application is to manage the details of Food Item, Category, Cart, customers."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Website"
              description="It is a music website build by using react. The objective of this project is to design a Music store web application with user interface which will enable them to browse, search, get and listen songs."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce store"
              description="An online virtual store on the Internet where customers can browse the catalog and
select products of interest. The selected items may be collected in a shopping cart. At checkout
time, the items in the shopping cart will be presented as an order."
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Google Keep Notes App Clone"
              description="It is a clone of the Google Keep App using React. It can add and delete notes implemented using JSX and styled with CSS and Material UI."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
