import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// IMAGES
import chatify from "../../Assets/Projects/kont.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cinemate from "../../Assets/Projects/cinemate.png";
import payments from "../../Assets/Projects/Pagesa.png";

const projects = [
  {
    imgPath: chatify,
    title: "Kont",
    description:
      "AI-Integrated Accounting Platform for SMEs: automates invoicing, expense categorization, forecasting with ML, anomaly detection, and real-time analytics dashboards.",
    ghLink: "https://github.com/ElonBytyqi/Kont",
     tech: ["React js", "Asp.net", "SQL Server","ML.NET", "Tailwind"],
    demoLink: null,
  },
  {
    imgPath: payments,
    title: "Payments",
    description:
      "A modern platform for managing student registrations, tuition payments and digital contract generation. The system automates fee tracking, streamlines enrollment workflows.",
    //ghLink: "https://github.com/ElonBytyqi/Kont",
         tech: ["Express js", "Next js ", "SQL Server", "Tailwind"],

    demoLink: null,
  },

  
  {
    imgPath: cinemate,
    title: "Cinemate",
    description:
      "A modern movie web app built with React.js. Includes HTML/CSS/JS and Markdown editors with instant preview, auto-save via local storage, and user-friendly design.",
    ghLink: "https://github.com/ElonBytyqi/Cinemate",
             tech: ["React js"],

    demoLink: "https://cinematemoviess.netlify.app/",
  },
  {
    imgPath: bitsOfCode,
    title: "EDMA GmbH",
    description:
      "Corporate website for a consulting and construction engineering company with over 400 projects since 2010. Focused on quality, functionality, aesthetics, and usability.",
    ghLink: "https://github.com/ElonBytyqi/EDMA-GMBH",
    demoLink: null,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="text-center" style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row
          className="g-4 justify-content-center"
          style={{ paddingBottom: "10px" }}
        >
          {projects.map((p, i) => (
            <Col key={i} xs={12} sm={6} md={4} className="project-card">
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={false}
                title={p.title}
                description={p.description}
                ghLink={p.ghLink}
                tech={p.tech}
                demoLink={p.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
