import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // mobile
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(".cursor-pointer")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  // Mobile-la render aagadhu
  if (isMobile) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    >
      <div
        className={`${
          isPointer ? "w-8 h-8" : "w-5 h-5"
        } rounded-full bg-cyan-400 shadow-[0_0_15px_#00ffff,0_0_30px_#00ffff] transition-all duration-150`}
      />
    </div>
  );
}