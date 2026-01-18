import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web from "../../Assets/Projects/web.png";
import brick from "../../Assets/Projects/brick.png";
import snake from "../../Assets/Projects/snake.png";
import pacman from "../../Assets/Projects/pacman.png";
import london from "../../Assets/Projects/london.png";
import analyzer from "../../Assets/Projects/analyzer.png";
import d3 from "../../Assets/Projects/d3.png";
import hybrid from "../../Assets/Projects/hybrid.png";
import nascon from "../../Assets/Projects/nascon.png";


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
              imgPath={hybrid}
              alt="Moiz Khalid"
              isBlog={false}
              title="Near-Real-Time Data Warehouse for Walmart using HYBRIDJOIN"
              description="Designed and implemented a near-real-time data warehouse prototype for Walmart to efficiently integrate and process customer, product, and transactional datasets. Applied a star schema for multidimensional sales analysis and implemented the HYBRIDJOIN algorithm in Python to join streaming transactional data with master datasets. The project involved handling large-scale disk-based data and continuous streams, providing hands-on experience in stream processing, ETL workflows, and real-world retail data warehousing."
              ghLink="https://drive.google.com/drive/folders/1cvkQ-PuuLiYSOXnb9Tto2sdw7ZuoJYUx?usp=sharing"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
      
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={london}
              alt="Moiz Khalid"
              isBlog={false}
              title="Case Study: Energy Consumption in London"
              description="Predicted energy consumption patterns from the Smart Meters in London dataset using demographic, weather, and temporal factors. Processed 3.5 million observations into 15,000 key records and tested multiple models, including Linear Regression, Penalized Regression, Decision Tree, Random Forest, and Gradient Boosting Regressor. Tree-based models, particularly Random Forest and Gradient Boosting, achieved the best performance. Key challenges included data preprocessing, feature engineering, and handling ACORN classifications, which were critical to improving predictive accuracy."
              ghLink="https://drive.google.com/drive/folders/1cvkQ-PuuLiYSOXnb9Tto2sdw7ZuoJYUx?usp=sharing"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nascon}
              alt="Moiz Khalid"
              isBlog={false}
              title="NASCON Database Management System"
              description="Designed and implemented a comprehensive Database Management System for NASCON to automate large-scale event operations. Built using MySQL (backend) and C# (frontend), the system includes role-based access control, event scheduling with conflict prevention, sponsorship and accommodation management, payments, and automated result evaluation. The database architecture leveraged ERD modeling, advanced SQL features (joins, views, stored procedures, triggers, privileges), ensuring data integrity, scalability, and secure access. The project received the highest marks for its technical quality and real-world applicability."
              ghLink="https://drive.google.com/drive/folders/1cvkQ-PuuLiYSOXnb9Tto2sdw7ZuoJYUx?usp=sharing"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
                
            
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
              imgPath={analyzer}
              alt="Moiz Khalid"
              isBlog={false}
              title="Intelligent CV Analyzer using String Matching Algorithms"
              description="Designed and developed a web-based CV Analyzer using Python and Streamlit to automate skill extraction and evaluate candidate-job fit. The system securely stores CVs and allows users to input job description keywords to assess profiles efficiently. It applies Brute Force, Rabin–Karp, and Knuth–Morris–Pratt (KMP) string matching algorithms to detect relevant skills, calculate relevance scores, highlight missing skills, and generate a ranked list of candidates. This project showcases the practical application of classical algorithms to streamline recruitment and support data-driven hiring decisions."
              ghLink="https://drive.google.com/drive/folders/1cvkQ-PuuLiYSOXnb9Tto2sdw7ZuoJYUx?usp=sharing"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d3}
              alt="Moiz Khalid"
              isBlog={false}
              title="Interactive Global Dashboards with D3.js"
              description="Developed two advanced interactive dashboards using D3.js, HTML, and CSS to visualize real-world datasets. The first dashboard analyzed global power plants with a zoomable world map, force-directed bubble charts filtered by fuel type, and a brushable timeline for dynamic updates. The second dashboard explored two centuries of global wealth and health trends using the Gapminder dataset, featuring a motion chart synchronized with a choropleth map, a sunburst hierarchy for drilling down into regions, and interactive highlighting for intuitive data exploration."
              ghLink="https://drive.google.com/drive/folders/1cvkQ-PuuLiYSOXnb9Tto2sdw7ZuoJYUx?usp=sharing"
              //demoLink="https://chatify-49.web.app/"
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
