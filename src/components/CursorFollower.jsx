import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.07;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.07;

      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-50 pointer-events-none
                 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "9999px",
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.32), rgba(255,255,255,0.08) 60%, transparent 75%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 0 30px rgba(255,255,255,0.12)",
        mixBlendMode: "screen",
      }}
    />
  );
}
