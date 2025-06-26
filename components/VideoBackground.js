"use client";
import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const fallbackPos = { x: 200, y: 400 }; 

  const currentPos = isHovering ? hoverPos : fallbackPos;

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden"
      onMouseMove={(e) => {
        setIsHovering(true);
        setHoverPos({ x: e.clientX, y: e.clientY });
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        src="/vmake.mp4"
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover brightness-200 contrast-400 hue-rotate-400"
      />

      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          WebkitMaskImage: `radial-gradient(circle 250px at ${currentPos.x}px ${currentPos.y}px, transparent 0%, black 100%)`,
          maskImage: `radial-gradient(circle 250px at ${currentPos.x}px ${currentPos.y}px, transparent 0%, black 100%)`,
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      />
    </div>
  );
}
