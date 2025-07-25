import React from "react";

interface HamburgerProps {
  color?: string;
  openColor?: string;
  spacing?: number;
  width?: number;
  height?: number;
  index?: number;
  borderRadius?: number;
  isOpen: boolean;
  toggle: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  color = "black",
  openColor,
  spacing = 6,
  width = 42,
  height = 4,
  index = 100,
  borderRadius = 0,
  isOpen,
  toggle,
}) => {
  const barClass =
    "absolute left-0 transition-all duration-300 ease-in-out will-change-transform";

  const barStyle = (isTop: boolean): React.CSSProperties => ({
    backgroundColor: isOpen && openColor ? openColor : color,
    width,
    height,
    borderRadius,
    transformOrigin: "center",
    transform: isOpen
      ? `${isTop ? "rotate(45deg)" : "rotate(-45deg)"} scaleX(1)`
      : `translateY(${isTop ? "-" : ""}${
          spacing / 2 + height / 2
        }px) rotate(0deg)`,
  });

  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="relative flex items-center justify-center select-none"
      style={{ width, height: height * 2 + spacing, zIndex: index }}
    >
      <span className={barClass} style={barStyle(true)} />
      <span className={barClass} style={barStyle(false)} />
    </button>
  );
};
