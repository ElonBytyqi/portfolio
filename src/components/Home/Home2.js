import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/loni.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Software Developer</b> passionate about
              building reliable, scalable, and intelligent applications that
              make a real impact.
              <br />
              <br />
              I specialize in developing{" "}
              <i>
                <b className="purple">Web</b> and <b className="purple">Cloud</b>{" "}
                solutions
              </i>
              , combining strong backend architecture with modern, responsive
              frontend interfaces.
              <br />
              <br />
              My main tech stack includes{" "}
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript (React.js, Node.js), C#, and MySQL{" "}
                </b>
              </i>
              , with hands-on experience in{" "}
              <b className="purple">ASP.NET</b> and AI-driven systems using{" "}
              <b className="purple">ML.NET</b>.
              <br />
              <br />
              In addition, I’m also an{" "}
              <b className="purple">SAP Developer</b> skilled in{" "}
              <i>
                <b className="purple">ABAP</b> and{" "}
                <b className="purple">SAP CAP (Cloud Application Programming)</b>
              </i>{" "}
              — building modern enterprise-grade applications on SAP BTP.
              <br />
              <br />
              I love creating{" "}
              <i>
                <b className="purple">
                  {" "}
                  smart, secure, and high-performance solutions{" "}
                </b>
              </i>{" "}
              that automate processes, predict outcomes, and improve
              decision-making.
              <br />
              <br />
              Outside of coding, I enjoy teaching, sharing knowledge, and
              exploring how AI and modern technologies can reshape the way we
              build software.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
        <Tilt>
  <img
    src={myImg}
    alt="avatar"
    className="img-fluid rounded-circle"
    style={{
      width: "200px",
      height: "200px",
      objectFit: "cover",
      border: "3px solid #9d20a4ff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
      margin: "auto",
      display: "block",
    }}
  />
</Tilt>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
