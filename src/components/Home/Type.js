import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bachelors of Data Science @ FAST",
          "Active Researcher",
          "Dean's list - All Semesters",
          "Football Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        pauseFor: 1500,
        delay: 4,
      }}
    />
  );
}

export default Type;
