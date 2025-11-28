import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
  tech = [],          // 👈 PRANO TECH KËTU
}) {
  return (
    <Card className="project-card-view h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
        className="object-fit-contain"
        style={{ height: 180 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{title}</Card.Title>

        <Card.Text className="text" style={{ textAlign: "justify", flex: 1 }}>
          {description}
        </Card.Text>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mt-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="badge bg-dark px-2 py-1"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="d-flex gap-2 mt-3">
          {ghLink && (
            <Button
              variant="dark"
              href={ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

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
