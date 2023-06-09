import { useEffect, useState } from 'react';

export default function MouseTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function updateMousePosition(event) {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    }
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return <output>{mousePos.x},{mousePos.y}</output>;
}
