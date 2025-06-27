import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { BsDot } from "react-icons/bs";
 function AboutCard() {
   return (
     <Card className="quote-card-view">
       <Card.Body>
         <blockquote className="blockquote mb-0">
           <p style={{ textAlign: "justify" }}>
             Hi Everyone, I am <span className="purple">Muhammad Moiz Khalid</span>  
             from <span className="purple">Islamabad, Pakistan.</span>  
             <br />
             I am currently pursuing a <span className="purple">Bachelor of Science (BS) in Data Science</span> at the  
             <span className="purple"> National University of Computer and Emerging Sciences (NUCES - FAST)</span> in Islamabad, Pakistan, with an expected graduation in May 2027.  
             <br />
             I have achieved a <span className="purple">Cumulative GPA of 3.84/4.0</span>. In recognition of my academic excellence, I was awarded a <span className="purple">Gold Medal</span> in my third semester and a <span className="purple">Silver Medal</span> in my first semester for achieving the top result in my entire batch.  
             <br />
             Additionally, I have been named to the <span className="purple">Dean's List</span> for <span className="purple">Fall 2023, Spring 2024, Fall 2024, and Spring 2025</span>.  
             <br />
             <br />
             Apart from coding, some other activities that I love to do!
           </p> 
           <ul>
             <li className="about-activity">
               <BsDot /> Hiking
             </li>
             <li className="about-activity">
               <BsDot /> Sports
             </li>
             <li className="about-activity">
               <BsDot /> Travelling
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
