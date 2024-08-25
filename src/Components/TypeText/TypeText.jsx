import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeText() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Web Developer",
          "Full Stack Web Developer",
          "React JS Developer",
          "MERN Stack Web Developer",
          "Frontend Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
