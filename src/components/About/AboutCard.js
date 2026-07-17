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
            Hi, I’m <span className="purple">Muhammad Moiz Khalid</span> from <span className="purple">Islamabad, Pakistan.</span>
            <br />
            <br />
            I am currently pursuing a <span className="purple">Bachelor of Science in Data Science</span> at the  
            <span className="purple"> National University of Computer and Emerging Sciences (NUCES - FAST)</span>, Islamabad, with an expected graduation in <span className="purple">May 2027</span>.
            <br />
            <br />

            I have maintained a <span className="purple"> cumulative GPA of 3.84/4.00,  </span> ranking <span className="purple"> 1st out of 150 students </span>, and have been recognized for academic excellence with<span className="purple"> two Gold Medals  , two Silver Medals </span>, and <span className="purple"> one Bronze Medal </span> for achieving the highest academic performance in my batch across multiple semesters.             
            <br />
            <br />
            I have also been named to the <span className="purple">Dean's List</span> for <span className="purple"> all my semesters.</span>.
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
         </blockquote>
       </Card.Body>
     </Card>
   );
 }

 export default AboutCard;
