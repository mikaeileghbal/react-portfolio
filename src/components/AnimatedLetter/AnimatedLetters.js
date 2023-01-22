import React, { useEffect, useState } from "react";
import "./AnimatedLetters.scss";

export default function AnimatedLetters({ className, letters, initialIndex }) {
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
    }, 4000);
  }, []);

  return (
    <span>
      {letters.map((char, i) => (
        <span
          key={char + i}
          className={`${animateText} _${i + initialIndex}`}
          onMouseEnter={mouseEnter}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
