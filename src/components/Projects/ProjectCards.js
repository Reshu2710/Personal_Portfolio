import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontSize:'2rem'}}>{props.title} </Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize:'15px', marginTop:'1rem'}}>
          {props.description}
        </Card.Text>
        {props.describe}
        {"\n"}
        {"\n"}      
      </Card.Body>
      <Button variant="primary" href={props.ghLink} style={{ marginTop:'3rem'}} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
    </Card>
  );
}
export default ProjectCards;
