// components/VideoBackground.js
"use client";
import { useState } from "react";

export default function VideoBackground() {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="fixed inset-0 z-4 overflow-hidden"
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
        className="absolute w-full h-full object-cover brightness-200 contrast-400 hue-rotate-400 "
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 200px at ${hoverPos.x}px ${hoverPos.y}px, transparent 0%, black 100%)`
            : "none",
          maskImage: isHovering
            ? `radial-gradient(circle 300px at ${hoverPos.x}px ${hoverPos.y}px, transparent 0%, black 100%)`
            : "none",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      />
    </div>
  );
}
