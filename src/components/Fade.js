import React, { useEffect, useLayoutEffect, useState } from "react";

export default function Fade({ show, children }) {
  const [shouldRender, setShouldRender] = useState(show);

  const onAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  useLayoutEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  if (!shouldRender) return null;

  return (
    <div
      className={`animated ${show ? "enter" : "exit"}`}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
}
