import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

 function AboutCard() {
   return (
     <Card className="quote-card-view">
       <Card.Body>
         <blockquote className="blockquote mb-0">
           <p style={{ textAlign: "justify" }}>
             Hi Everyone, I am <span className="purple">Muhammad Moiz Khalid </span>
             from <span className="purple"> Islamabad, Pakistan.</span>
             <br />
             I am currently pursuing a <span className="purple"> Bachelor of Science (BS) in Data Science </span> at the <span className="purple"> National University of Computer and Emerging Sciences (NUCES - FAST) </span> in Islamabad, Pakistan, with an expected graduation date in May 2027.
             <br />
              I have achieved a Cumulative GPA of 3.72/4.0. In recognition of my academic excellence, I was awarded the Silver Medal in my first semester for achieving the top result in my entire batch in 2023.
             <br />
              Additionally, I have been named to the Dean's List for both Fall 2023 and Spring 2024.
             <br />
             <br />
             Apart from coding, some other activities that I love to do!
           </p>
           <ul>
             <li className="about-activity">
               <ImPointRight /> Playing Games
             </li>
             <li className="about-activity">
               <ImPointRight /> Sports
             </li>
             <li className="about-activity">
               <ImPointRight /> Travelling
             </li>
           </ul>

           <p style={{ color: "rgb(155 126 172)" }}>
             "It's okay to look back at the past, just remember not to stare"{" "}
           </p>
           <footer className="blockquote-footer">Moiz</footer>
         </blockquote>
       </Card.Body>
     </Card>
   );
 }

 export default AboutCard;
