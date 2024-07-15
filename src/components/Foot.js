import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Whatsapp,
} from "react-bootstrap-icons";

export default function Foot() {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col lg={12}>
            <Row className="justify-content-center">
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://www.facebook.com/pugal.prasanna?mibextid=qi2Omg&rdid=F1LgXqkVLdZZ5vsc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FS3mwfYQTF7DejYgR%2F%3Fmibextid%3Dqi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={30}
                    style={{ color: "#4267B2" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://www.instagram.com/_md.asim?igsh=bnZuMng4YjV1bmhs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={30}
                    style={{ color: "#C13584" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://github.com/mdasim19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={30}
                    style={{ color: "#ffffff" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <a
                  href="https://www.linkedin.com/in/mohamed-asim-a3b3931b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    size={30}
                    style={{ color: "#0077B5" }}
                    className="icon"
                  />
                </a>
              </Col>
              <Col lg={1} md={2} sm={2} xs={2} className="text-center">
                <Whatsapp
                  size={30}
                  style={{ color: "#25D366" }}
                  className="icon"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center " lg={6} md={6} sm={12} xs={12}>
            <p>
              No: 113, Main road, Melkavarapet, Panruti.
              <br /> Cuddalore-607112.
            </p>
          </Col>
          <Col className="" lg={6} md={6} sm={12} xs={12}>
            <p>
              Phone:9600275979
              <br />
              mohamedasim.prt@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
