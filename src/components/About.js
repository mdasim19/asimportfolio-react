import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import asim from "../assets/icon.jpg";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div className="bg-dark text-light p-5" id="about">
      <h1 className="mb-4">About Me!</h1>
      <Row>
        <Col lg={6} md={12}>
          <p style={{ textAlign: "justify" }}>
            I am Asim, a self-confident individual with strong teamwork and
            leadership qualities. I have a keen interest in React.js development
            and am a solo self-learner dedicated to continuous improvement.
            <br />
            <br />
            I possess good design skills, which allow me to create aesthetically
            pleasing and user-friendly interfaces. My technical skills include
            proficiency in various web technologies, such as HTML, CSS,
            JavaScript, and of course, React.js. I am also familiar with tools
            and libraries like React-Bootstrap, Postman Api and Git.
            <br />
            <br />I am committed to enhancing my skills and staying updated with
            the latest industry trends and best practices. My goal is to
            contribute effectively to the projects I work on and continuously
            grow as a developer.
          </p>
        </Col>
        <Col lg={6} md={12}>
          <img
            alt="Pugalendhi"
            src={asim}
            className="img-fluid rounded-circle mb-3 p-3"
            data-aos="zoom-in"
          />
          <h4>Skills</h4>
          <Row>
            <Col lg={2} md={2} sm={3} xs={4} className="mb-2">
              <Button
                variant="outline-danger"
                className="w-100"
                data-aos="flip-left"
              >
                HTML
              </Button>
            </Col>
            <Col lg={2} md={2} sm={3} xs={4} className="mb-2">
              <Button
                variant="outline-light"
                className="w-100"
                data-aos="flip-left"
              >
                CSS
              </Button>
            </Col>
            <Col lg={2} md={2} sm={3} xs={4} className="mb-2">
              <Button
                variant="outline-primary"
                className="w-100"
                data-aos="flip-left"
              >
                JAVA
              </Button>
            </Col>
            <Col lg={2} md={2} sm={3} xs={4} className="mb-2">
              <Button
                variant="outline-warning"
                className="w-100"
                data-aos="flip-left"
              >
                JS6
              </Button>
            </Col>
            <Col lg={2} md={2} sm={3} xs={4} className="mb-2">
              <Button
                variant="outline-info"
                className="w-100"
                data-aos="flip-left"
              >
                REACT
              </Button>
            </Col>
            <Col lg={2} md={2} sm={3} xs={4} className="mb-2">
              <Button
                variant="outline-success"
                className="w-100"
                data-aos="flip-left"
              >
                MERN
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
