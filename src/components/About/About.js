import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import teach from "../../Assets/teach.png";
import wwf from "../../Assets/wwf.png";
import stan from "../../Assets/stanford.png";
import penn from "../../Assets/penn.png";
import usefp from "../../Assets/usefp.png";

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
             style={{ paddingTop: "120px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={laptopImg} alt="about" className="img-fluid" />
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
              Teach For Pakistan
             </h1>
             <p>
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
             <p>
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
             <p>
              Completed a specialization course on Coursera by Stanford University and Deep Learning AI where I learned in detail about supervised and unsupervised machine learning.
              <br />
              The course's main focus was on regression and classification models.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "30px", paddingBottom: "50px" }}
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
             <p>
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
             <p>
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
              
         <Github />
       </Container>
     </Container>
   );
 }

 export default About;
