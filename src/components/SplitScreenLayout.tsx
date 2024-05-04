import React, { useState } from "react";
import { PropsWithChildren } from "react";

type PageLayoutProps = PropsWithChildren;

export default function SplitScreenLayout({ children }: PageLayoutProps) {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  const handleMouseEnter = (side: "left" | "right") => {
    setHoveredSide(side);
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
  };

  const [leftSide, rightSide] = React.Children.toArray(children);

  const leftSideStyle = {
    flex: hoveredSide === "left" ? 2 : 1,
    transition: "flex 0.3s",
    boxShadow: hoveredSide === "left" ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
  };

  const rightSideStyle = {
    flex: hoveredSide === "right" ? 2 : 1,
    transition: "flex 0.3s",
    boxShadow: hoveredSide === "right" ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={leftSideStyle}
        onMouseEnter={() => handleMouseEnter("left")}
        onMouseLeave={handleMouseLeave}
      >
        {leftSide}
      </div>
      <div
        style={rightSideStyle}
        onMouseEnter={() => handleMouseEnter("right")}
        onMouseLeave={handleMouseLeave}
      >
        {rightSide}
      </div>
    </div>
  );
}
