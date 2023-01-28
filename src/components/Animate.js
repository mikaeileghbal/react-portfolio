import React, { useEffect, useLayoutEffect, useState } from "react";

export default function Animate({
  show,
  enter,
  exit,
  classname,
  delay,
  children,
}) {
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
      className={`${classname} ${show ? enter : exit}`}
      style={{ animationDelay: delay }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
}
