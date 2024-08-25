import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moveIT from "../../Assets/Projects/moveIT.png";
import Pantry from "../../Assets/Projects/Pantry.png";
import MATLAB from "../../Assets/Projects/MATLAB.png";
import UAV from "../../Assets/Projects/UAV.jpg";
import ROS22 from "../../Assets/Projects/ROS22.png";
import openCV from "../../Assets/Projects/openCV.png";
import Confide from "../../Assets/Projects/Confide.png"; // Add the import for the new image

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
              imgPath={UAV}
              alt="Moiz Khalid"
              isBlog={false}
              title="Retro Brick Breaker Game"
              description="Designed a retro-style Brick Breaker game using C++ and object-oriented programming principles. I employed classes and objects to build core gameplay mechanics, including paddle movement, ball dynamics, collision detection, and scoring systems. The game features a classic design with retro-style graphics and animations, managed through the GLUT library. This project not only showcased my proficiency in OOP but also demonstrated my ability to create engaging and visually appealing games. The successful completion of this project earned top marks, highlighting my effective application of technical skills and creative design in game development."
              ghLink="https://drive.google.com/drive/folders/1VZXFBoCv0CTOtGqNg7xz5MxMSMxJoqE4?usp=drive_link"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={ROS22}
             alt="Moiz Khalid"
             isBlog={false}
             title="Retro Snake Game"
             description="Implemented a retro-style Snake game using C++ and the GLUT library for graphics. I developed core gameplay mechanics such as snake movement, collision detection, and scoring, while also creating a user-friendly interface with intuitive controls. I utilized GLUT to manage retro-style graphics and animaMons, enhancing the game's nostalgic feel. The project was awarded the highest marks in the class, reflecting my successful integration of technical and creative elements. "
             ghLink="https://drive.google.com/drive/folders/1slVHcb_GYZP8J9f-uVvBsdKfZLr8xg6w?usp=drive_link"   
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Pantry}
             alt="Moiz Khalid"
             isBlog={false}
             title="Web Page Design"
             description="Designed dynamic and responsive web page for an online courses platform using HTML, CSS, and JavaScript. The webpage features a sleek, modern design with interactive elements, including course listings, search functionality, and user-friendly navigation. This project highlights my skills in front-end development by emphasizing an engaging user experience through well structured layouts and responsive design techniques, effectively showcasing my proficiency in modern web development practices."
             ghLink="https://pantry-tracker-saad-c2lurmru2-saad-ahmed-ranas-projects.vercel.app"
             demoLink="https://pantry-tracker-saad-c2lurmru2-saad-ahmed-ranas-projects.vercel.app/"              
            />
          </Col>
/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MATLAB}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Para thrust"
              description="This application, developed in the MATLAB environment, performs a parametric and performance analysis of a turbo-jet engine. The project was funded by the government of Pakistan and completed according to the guidelines of the NASA Systems Engineering Handbook. "
              ghLink="https://drive.google.com/drive/folders/1hZ8tWqEDbD2QUUOj0CAZp9JsIepPHJ6K?usp=drive_link"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moveIT}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Path planning in ROS2"
              description="This project plans the trajectory of a robot URDF model for domestic robot as it picks up objects and places them in a pre-decided place. moveIT is used in ROS2 to visualize in cartesian coordinates and then the code runs the simulation in quaternion coordinates in the background. "
              ghLink="https://drive.google.com/drive/folders/1slVHcb_GYZP8J9f-uVvBsdKfZLr8xg6w"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={openCV}
                alt="Saad Ahmed Rana"
                isBlog={false}
                title="Computer Vision"
                description="This is a hand detection and tracking module that counts the number of fingers open for any number of hands on the stream. The project is being extended to detect sign language gestures for making a sign-to-speech model."
                ghLink="https://drive.google.com/drive/folders/1MkFPLrYuMmITa5wryXUymGWyD_lU5MKk?usp=drive_link"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
  */ 
        </Row>  
        
/*
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Confide} // Add the image for the new project
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Confide"
              description="Confide is a chatbot that simulates a friend, providing support during both good and challenging times. Built with Python and the `cleverbotfreeapi`, it features a user-friendly interface using HTML, CSS, and JavaScript."
              ghLink="https://github.com/saadahmedrana/confide" // Add the GitHub link
              // demoLink="https://example.com" // Add a demo link if available
            />
          </Col>
        </Row>
     */   
      </Container>
    </Container>
  );
}

export default Projects;
