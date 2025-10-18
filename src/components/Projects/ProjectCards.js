import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <Card className="project-card-view h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
        className="object-fit-cover"
        style={{ height: 180 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{title}</Card.Title>
        <Card.Text className="text" style={{ textAlign: "justify", flex: 1 }}>
          {description}
        </Card.Text>

        <div className="d-flex gap-2 mt-3">
          <Button
            variant="dark"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
          </Button>

          {!isBlog && !!demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
