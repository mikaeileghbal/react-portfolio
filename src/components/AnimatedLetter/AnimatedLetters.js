import React, { useEffect, useState } from "react";
import "./AnimatedLetters.scss";

export default function AnimatedLetters({ letters, initialIndex }) {
  const [animateText, setAnimateText] = useState("text-animate");

  const mouseEnter = (e) => {
    e.target.classList.add("text-animate-hover");
    e.target.addEventListener("animationend", () => {
      e.target.classList.remove("text-animate-hover");
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimateText("");
    }, 7500);
  }, []);

  return (
    <span>
      {letters.map((char, i) => (
        <span
          key={char + i}
          className={`${animateText} _${i + initialIndex} ${
            char === "-" ? "space" : ""
          }`}
          // onMouseEnter={mouseEnter}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
