// src/components/About/Experience.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Experience.css";


const EXPERIENCES = [
  {
    title: "SAP Developer",
    company: "Invasoft (Remote)",
    period: "December 2024 – Present",
    bullets: [
      "Developed enterprise-grade applications using ABAP RAP, using CDS Views and EML to develop OData services and metadata annotations for Fiori apps in S/4HANA Cloud and On-premise.",
      "Built and maintained backend services and Fiori apps with SAP CAP, integrating them as side-by-side applications.",
      "Used BTP services such as XSUAA for authentication, HANA DB for data persistence, MTA for building, and BTP Destination for secure data access.",
      "Worked remotely with SAP consultants on enterprise projects, delivering scalable and efficient business solutions for modules like MM, SD, PP, EWM and Logistics.",
      "Ensured clean, testable code following agile practices and continuous delivery pipelines."
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Kosova Information Technology",
    period: "July 2024 – November 2024",
    bullets: [
      "Developed and maintained full-stack web applications using PHP, MySQL, and JavaScript.",
      "Designed responsive and dynamic UIs with HTML, CSS, Bootstrap, and jQuery.",
      "Collaborated with team members to integrate front-end and back-end functionalities, ensuring seamless user experiences.",
      "Optimized database queries and improved application performance by fine-tuning MySQL.",
      "Actively participated in Agile workflows, contributing to sprint planning and daily stand-ups.",
      "Worked on debugging, testing, and deploying web applications, enhancing code quality and application reliability."
    ]
  },
  {
    title: "High School Programming Teacher",
    company: "ISPE College",
    period: "2025 – Present",
    bullets: [
      "Teaching Java, HTML/CSS, IoT and Software Fundamentals to high school students.",
      "Creating curriculum, lesson plans and practical exercises focused on real-world development skills.",
      "Guiding student projects and mentoring young developers toward modern software practices."
    ]
  }
];

function Experience() {
  return (
    <section id="experience">
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="experience-wrapper">
          {EXPERIENCES.map((exp, index) => (
            <article key={index} className="experience-card">
              <div className="experience-header">
                <h2 className="experience-title">
                  {exp.title} — {exp.company}
                </h2>
                <span className="experience-date">{exp.period}</span>
              </div>

              <ul className="experience-text text-start">
                {exp.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Col>
      </Row>
    </section>
  );
}

export default Experience;
