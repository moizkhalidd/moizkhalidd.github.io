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
import pk from "../../Assets/pk.png";
import zayed from "../../Assets/zayed.png";

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
           <strong className="purple">Publications </strong>
         </h1>


          <div style={{ marginBottom: "30px" }}>
          <h3>
            AZNet: An Efficient Convolutional Neural Network for Alzheimer's Disease Classification
          </h3>
        
          <p>
            <strong>Authors:</strong> M. M. Khalid, M. S. Abbas, A. Muhammad
            <br />
            <strong>Conference:</strong> IEEE ICISCT 2026 • Karachi, Pakistan
            <br />
            <strong>Status:</strong>{" "}
            <span className="purple">Published in IEEE Xplore</span>
            <br />
            <a
             href="https://doi.org/10.1109/ICISCT67740.2026.11576503"
             target="_blank"
             rel="noopener noreferrer"
             style={{
               color: "#c770f0",
               textDecoration: "underline",
               cursor: "pointer",
               position: "relative",
               zIndex: 9999,
               pointerEvents: "auto",
             }}
           >
             View Publication ↗
           </a>
          </p>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <h3>
            EmoNet: A Lightweight Attention-Based CNN for Speech Emotion Recognition
          </h3>
        
          <p>
            <strong>Authors:</strong> M. M. Khalid, A. Rehman, M. O. Yamin
            <br />
            <strong>Conference:</strong> IEEE IBCAST 2026 • Murree, Pakistan
            <br />
            <strong>Status:</strong>{" "}
            <span className="purple">Accepted • Publication Pending</span>
          </p>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <h3>
            Analysing User Reviews to Identify User Concerns Around Permissions in AI Apps
          </h3>
        
          <p>
            <strong>Authors:</strong> F. Ullah, B. Shah, M. Watkinson, M. M. Khalid
            <br />
            <strong>Status:</strong>{" "}
            <span className="purple">Ongoing Research</span>
          </p>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <h3>
            Australian Bushfire Intelligence with AI-Driven Environmental Analytics
          </h3>
        
          <p>
            <strong>Authors:</strong> T. Jois, H. Ahmad, F. Ullah, M. M. Khalid
            <br />
            <strong>Status:</strong>{" "}
            <span className="purple">Ongoing Research</span>
          </p>
        </div>








              
         <h1 className="project-heading">
           <strong className="purple">Experiences </strong>
         </h1>


           <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
             md={7}
             style={{
               justifyContent: "center",
               paddingTop: "5px",
               paddingBottom: "20px",
             }}
           >            
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               Research Assistant
             </h1>
             <p style={{ textAlign: "justify" }}>
              I work closely with a professor on various research topics and projects. I assist with different research-related tasks and review research papers written by graduate students, providing feedback to help improve their quality. I was selected as one of the few undergraduate students for this role, giving me the opportunity to gain hands-on experience working on graduate-level research.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "30px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={zayed} alt="about" className="img-fluid" />
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
             Undergraduate Researcher
             </h1>
             <p style={{ textAlign: "justify" }}>
             I’m currently working as an undergraduate researcher in Computer Vision and Deep Learning under the guidance of a university professor. My current work focuses on using Convolutional Neural Networks (CNNs) to apply deep learning models and contribute to the writing of research papers aimed at solving real-world challenges in AI. I’m honored to be one of only five students selected for this opportunity, based on achieving the highest grade in my batch in a course taught by the same professor.
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
              Courses: OOP Lab (Fall ’24), PF Lab (Spring ’25), IDS Lab (Fall ’25), PF Theory (Fall ’25), OOP Lab (Spring’26)
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
              During my internship at Teach for Pakistan, the national chapter of Teach for All, I learned from successful leaders about running impactful campaigns and initiatives. As the leader of my group, I successfully organized fundraising efforts that benefited over 1,500 underprivileged students across Pakistan.
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
              As an Eco-Intern at WWF, I ran awareness campaigns on endangered species and the impact of excessive plastic waste on the environment. I organized a plastic collection drive, successfully collecting over 10 kilograms of plastic waste. During the internship, I also learned graphic design, creating posters and flyers to promote campaigns on social media.
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
              Pehli Kiran Schools
             </h1>
             <p style={{ textAlign: "justify" }}>
             Passionate about bridging the education gap, I volunteered with Pehli Kiran Schools, an NGO dedicated to providing quality education to underprivileged children. In support of the UN Sustainable Development Goal for education, I engaged in learning initiatives and built meaningful connections with students to positively impact their academic journey.
             </p>  
           </Col>
           <Col
             md={5}
             style={{ paddingTop: "40px", paddingBottom: "50px" }}
             className="about-img"
           >
             <img src={pk} alt="about" className="img-fluid" />
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
              Completed a specialization course by Stanford University and DeepLearning.AI, gaining in-depth knowledge of supervised and unsupervised machine learning. The course focused primarily on regression and classification models, covering both theory and practical implementation.
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
             Selected from across Pakistan for the highly competitive CCC program by USEFP, designed for high school students in the top 10% of their class with strong extracurricular achievements. During the program, I engaged in volunteering and team-building activities while participating in intensive cohort advising sessions.
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
