import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import teach from "../../Assets/teach.png";

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
           <strong className="purple">Experience </strong>
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
             style={{ paddingTop: "70px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={teach} alt="about" className="img-fluid" />
           </Col>
         </Row>
        

         <h1 className="project-heading">
           <strong className="purple">Tools</strong> I use
         </h1>
         <Toolstack />

         <Github />
       </Container>
     </Container>
   );
 }

 export default About;
