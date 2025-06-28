import { cn } from "@/lib/utils";
import React from "react";

export const WaterDrops = ({
  number,
  className,
}) => {
  const drops = new Array(number || 20).fill(true);
  return (
    <>
      {drops.map((el, idx) => {
        const size = Math.floor(Math.random() * (8 - 4) + 4);
        return (
          <div
            key={"drop" + idx}
            className={cn(
              "animate-water-drop absolute",
              className
            )}
            style={{
              top: Math.floor(Math.random() * 100) + "%",
              left: Math.floor(Math.random() * 100) + "%",
              width: size + "px",
              height: size * 1.5 + "px",
              animationDelay: Math.floor(Math.random() * (4 - 0.5) + 0.5) + "s",
              animationDuration: Math.floor(Math.random() * (12 - 6) + 6) + "s",
            }}
          >
            {/* Main drop body */}
            <div 
              className="w-full h-full bg-gradient-to-b from-blue-300/80 via-blue-400/60 to-blue-500/40 rounded-full"
              style={{
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                boxShadow: "0 0 6px 1px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)"
              }}
            />
            {/* Top highlight */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full"
              style={{ top: "2px" }}
            />
            {/* Secondary highlight */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-white/40 rounded-full"
              style={{ top: "3px" }}
            />
          </div>
        );
      })}
    </>
  );
};
