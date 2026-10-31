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
            Hi, I'm <span className="purple">Muhammad Moiz Khalid</span> from <span className="purple">Islamabad, Pakistan.</span>
            <br />
            <br />
            I am currently pursuing a <span className="purple">Bachelor of Science in Data Science</span> at the <span className="purple">National University of Computer and Emerging Sciences (NUCES - FAST)</span>, Islamabad, with an expected graduation in <span className="purple">May 2027</span>.
            <br />
            <br />
            I have maintained a <span className="purple">CGPA of 3.84/4.00</span>, ranking <span className="purple">1st out of 150 students</span>. My academic achievements include <span className="purple">two Gold Medals, two Silver Medals, and one Bronze Medal</span>, along with a place on the <span className="purple">Dean's List in every semester</span>.
            <br />
            <br />
            My research interests lie in <span className="purple">Artificial Intelligence, Machine Learning, and Computer Vision</span>, particularly in developing efficient and reliable deep learning systems. I have authored and co-authored several conference publications and am actively involved in research spanning AI, cybersecurity, and data science.
            <br />
            <br />
            Beyond academics and research, I enjoy:
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
            "It's okay to look back at the past, just remember not to stare"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
