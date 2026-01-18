import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import me from "../../Assets/me.png";
import Toolstack from "./Toolstack";
import teach from "../../Assets/teach.png";
import wwf from "../../Assets/wwf.png";
import stan from "../../Assets/stanford.png";
import penn from "../../Assets/penn.png";
import usefp from "../../Assets/usefp.png";
import uni from "../../Assets/Uni.png";
import turing from "../../Assets/turing.png";

 function About() {
   return (
     <Container fluid className="about-section">
       <Particle />
       <Container>
         <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >
             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               Get to know <strong className="purple">ME</strong>
             </h1>
             <Aboutcard />
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "10px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={me} alt="about" className="img-fluid" />
           </Col>
         </Row>
         <h1 className="project-heading">
           <strong className="purple">Experiences </strong>
         </h1>


          <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >            
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Data Annotator at Turing
             </h1>
             <p style={{ textAlign: "justify" }}>
              I worked as a Data Annotator at Turing, where I contributed to the development of Claude, an agentic AI assistant by Anthropic designed for real-world, browser-based interactions.
              <br />
              My day-to-day work involved using internal tools to create and refine high-quality training data that improved the model’s reasoning, information synthesis, and task execution capabilities. I focused on summarizing long-form content, organizing information into clear and logical sections, fact-checking with trusted sources, and handling reasoning-driven prompts.
              <br />
              Once the data was generated, I carefully reviewed it to ensure it aligned with strict content and quality standards. 
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "30px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={turing} alt="about" className="img-fluid" />
           </Col>
         </Row>     



              
              
           <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >            
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Teaching Assistant / Lab Demonstrator
             </h1>
             <h1 style={{ fontSize: "1.1em", paddingBottom: "20px" }}>
              Courses: OOP Lab (Fall ’24), PF Lab (Spring ’25), IDS Lab (Fall ’25), PF Theory (Fall ’25)
             </h1>
              
             <p style={{ textAlign: "justify" }}>
             As a Programming Fundamentals TA, I supported students in understanding core programming concepts, created and graded quizzes and assignments, supervised semester projects, and provided guidance throughout the course. In lab sessions, I guided 60+ undergraduates through hands-on exercises, delivered demonstrations, assisted with debugging, and co-designed lab activities in C++, Python, and object-oriented programming. 
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "30px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={uni} alt="about" className="img-fluid" />
           </Col>
         </Row>


             <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >
 

            
            
             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Teach For Pakistan
             </h1>
             <p style={{ textAlign: "justify" }}>
              During this internship at Teach for Pakistan (national chapter of "Teach for All"), I learned in detail from successful leaders in Pakistan about running proper and influential campaigns. 
              <br />
              As the leader of my group I was able to collect funds for more than 1500 underprivileged students in Pakistan.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "30px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={teach} alt="about" className="img-fluid" />
           </Col>
         </Row>


             <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >
             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              WWF
             </h1>
             <p style={{ textAlign: "justify" }}>
              As an Eco-Intern working with WWF, I ran campaigns spreading awareness on endangered species and effects of excessive plastic deposits on earth. 
              <br /> 
              Through a plastic collection drive I managed to collect more than 10 kilograms of plastic waste.
              <br />
              During this internship I also learned graphic designing as I designed posters and flyers to promote our campaign on social media.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "40px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={wwf} alt="about" className="img-fluid" />
           </Col>
         </Row>  

         <h1 className="project-heading">
           <strong className="purple">Academic Achievements</strong>
         </h1>

         <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >
             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Machine Learning Specialization
             </h1>
             <p style={{ textAlign: "justify" }}>
              Completed a specialization course on Coursera by Stanford University and Deep Learning AI where I learned in detail about supervised and unsupervised machine learning.
              <br />
              The course's main focus was on regression and classification models.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "30px", paddingBottom: "20px" }}
             className="about-img"
           >
             <img src={stan} alt="about" className="img-fluid" />
           </Col>
         </Row>
              
             <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >
             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Engineering Summer Academy at Penn (ESAP) Program
             </h1>
             <p style={{ textAlign: "justify" }}>
              I was the only student from Pakistan to be selected for the ESAP program by UPenn in the Nanotechnology course and with that I was awarded a 97% scholarship for the whole program.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "40px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={penn} alt="about" className="img-fluid" />
           </Col>
         </Row>  

           <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "30px",
               paddingBottom: "50px",
             }}
           >
             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Competitive College Club (CCC) at United States Educational Foundation in Pakistan (USEFP)
             </h1>
             <p style={{ textAlign: "justify" }}>
              Selected from all over Pakistan for CCC by USEFP. Participated in volunteering activities and team building workshops. 
            <br />
              CCC is an intensive cohort-advising, highly selective and exclusive program for school students who are in the top 10% of their class in addition to having strong extracurriculars.
              </p>
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "40px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={usefp} alt="about" className="img-fluid" />
           </Col>
         </Row>  
       </Container>
     </Container>
   );
 }

 export default About;
