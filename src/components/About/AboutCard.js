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
             I am currently employed as a software developer at Juspay.
             <br />
             I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
             Mesra.
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
             "It's okay to look back at the past, just remeber not to stare"{" "}
           </p>
           <footer className="blockquote-footer">Moiz</footer>
         </blockquote>
       </Card.Body>
     </Card>
   );
 }

 export default AboutCard;
