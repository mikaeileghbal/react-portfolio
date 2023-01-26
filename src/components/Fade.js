import React, { useEffect, useState } from "react";

export default function Fade({ show, children }) {
  const [shouldRender, setShouldRender] = useState(show);

  const onAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
}
