import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Nav } from "./components/Navbar"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Bottombar from "./components/Bottombar"

import { useEffect, useRef } from "react";

function App() {
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const current = useRef({ x: target.current.x, y: target.current.y });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      const stiffness = 0.5; // how fast it moves
      const damping = 0.85;   // bounce resistance

      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      velocity.current.x = velocity.current.x * damping + dx * stiffness;
      velocity.current.y = velocity.current.y * damping + dy * stiffness;

      current.current.x += velocity.current.x;
      current.current.y += velocity.current.y;

      document.documentElement.style.setProperty(
        "--mx",
        `${current.current.x}px`
      );
      document.documentElement.style.setProperty(
        "--my",
        `${current.current.y}px`
      );

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-gray-400 selection:text-gray-900">
      
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                750px at var(--mx, 50%) var(--my, 50%),
                rgba(255,255,255,0.045),
                transparent 70%
              ),
              linear-gradient(to top, #0f172a, #020617)
            `,
          }}
        />
      </div>

      {/* Navigation */}
      <div className="hidden md:block md:mb-8">
        <Nav />
      </div>
      <div className="block md:hidden">
        <Bottombar />
      </div>

      {/* Sections */}
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="work"><Work /></div>

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
