import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bachelors of Data Science @ FAST",
          "Dean's list for Fall 23 & Spring 24",
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
