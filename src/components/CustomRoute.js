import React, { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import styled, { keyframes } from "styled-components";

const ProgressAnim = keyframes`
  0%{
    opacity: 1;
    transform-origin: left;
    transform: translate3d(-100%,0,0);
  }
  50%{
    opacity: 0.5;
    transform: translate3d(0,0,0)
  }
  100%{
    opacity: 0;
    transform: translate3d(100%,0,0)
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  background-color: green;
  animation-name: ${ProgressAnim};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

export default function CustomRoute({ children }) {
  const [progress, setProgress] = useState(false);
  const [prevLocation, setPrevLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLocation(location.pathname);
    setProgress(true);
    if (prevLocation === location.pathname) {
      setPrevLocation("");
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(false);
    }, 0);
  }, [prevLocation]);

  return (
    <>
      {/* {progress && <ProgressBar />} */}
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  );
}
