import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/robot1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Home2.css'; // Make sure to import your CSS file

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple"> INTRODUCTION </span> 
            </h1>
            <p className="home-about-body">
               I'm a second-year undegraduate student at FAST NUCES Islamabad studying Data Science. <br /><br />
               I'm passionate to pursue my career in Machine Learning, AI & software development and am always eager to hear about new opportunities in these domains. <br /><br /> 
               Feel free to reach me at mmoizkhalidd@gmail.com. 
              <br /><br />
              <br />Languages I code in:
              <i>
                <b className="purple"> Python | C++ | HTML | JS | CSS | VB . </b>
              </i>
              <br />
              <br />
              Worked with: &nbsp;
              <i>
                <b className="purple">ROS2 | Gazebo | MoveIT | OpenCV | AWS ASK SDK | ReactJS | NodeJS | Typescript | TensorFlow | JupyterNotebook</b> and
                {" "}
                <b className="purple">
                MediaPipe.
                </b>
              </i>
              <br />
              <br />
              <div className="custom-line">
              Check out my Projects and Resume from the tabs
                <b className="purple"> ABOVE</b>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Saad Ahmed Rana" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
               <span className="purple">Feel free to connect with me </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/moizkhalidd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/moiz-khalid-84b82527a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
               <li className="social-icons">
                <a
                  href="https://www.instagram.com/moiz.khalidd/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>      
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
