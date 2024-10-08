import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web from "../../Assets/Projects/web.png";
import brick from "../../Assets/Projects/brick.png";
import snake from "../../Assets/Projects/snake.png";
import pacman from "../../Assets/Projects/pacman.png";


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
              imgPath={brick}
              alt="Moiz Khalid"
              isBlog={false}
              title="Retro Brick Breaker Game"
              description="Designed a retro-style Brick Breaker game using C++ and object-oriented programming principles. I employed classes and objects to build core gameplay mechanics, including paddle movement, ball dynamics, collision detection, and scoring systems. The game features a classic design with retro-style graphics and animations, managed through the GLUT library. This project not only showcased my proficiency in OOP but also demonstrated my ability to create engaging and visually appealing games. The successful completion of this project earned top marks, highlighting my effective application of technical skills and creative design in game development."
              ghLink="https://drive.google.com/drive/folders/1cvkQ-PuuLiYSOXnb9Tto2sdw7ZuoJYUx?usp=sharing"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={snake}
             alt="Moiz Khalid"
             isBlog={false}
             title="Retro Snake Game"
             description="Implemented a retro-style Snake game using C++ and the GLUT library for graphics. I developed core gameplay mechanics such as snake movement, collision detection, and scoring, while also creating a user-friendly interface with intuitive controls. I utilized GLUT to manage retro-style graphics and animaMons, enhancing the game's nostalgic feel. The project was awarded the highest marks in the class, reflecting my successful integration of technical and creative elements. "
             ghLink="https://drive.google.com/drive/folders/1Yn-RyY4e5YM72akgN1mHiFL-zvUToUDM?usp=sharing"   
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={web}
             alt="Moiz Khalid"
             isBlog={false}
             title="Web Page Design"
             description="Designed dynamic and responsive web page for an online courses platform using HTML, CSS, and JavaScript. The webpage features a sleek, modern design with interactive elements, including course listings, search functionality, and user-friendly navigation. This project highlights my skills in front-end development by emphasizing an engaging user experience through well structured layouts and responsive design techniques, effectively showcasing my proficiency in modern web development practices."
             ghLink="https://drive.google.com/drive/folders/1-x_Qets-TgbiPlfCTK3gG2CQ8xWW_xEz?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              alt="Moiz Khalid"
              isBlog={false}
              title="Pacman"
              description="This terminal-based Pacman game, written in C++, offers a classic arcade experience with a modern twist. The player controls Pacman, navigating through a maze filled with pellets, while avoiding a single ghost that moves randomly. The ghost's unpredictable movement adds an element of suspense, making each playthrough unique. The game is designed with simple controls and ASCII graphics, providing a nostalgic yet engaging experience for fans of retro games."
              ghLink="https://drive.google.com/drive/folders/1Hih0EcCoPHGqnbET1rlubyWwaB5Cfo04?usp=sharing"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


                  
        </Row>  

      </Container>
    </Container>
  );
}

export default Projects;
