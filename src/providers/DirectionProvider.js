import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const DirProvider = createContext({});

export const useDirection = () => useContext(DirProvider);

export default function DirectionProvider({ children }) {
  const [direction, setDirection] = useState("left");
  const [activeLink, setActiveLink] = useState(0);

  const providerValue = {
    direction,
    setDirection,
    activeLink,
    setActiveLink,
  };

  return (
    <DirProvider.Provider value={providerValue}>
      {children}
    </DirProvider.Provider>
  );
}
