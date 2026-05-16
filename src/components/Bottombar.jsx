import { useEffect, useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice } from "react-icons/md";
import { motion } from "framer-motion";

const Bottombar = () => {
  const [showBar, setShowBar] = useState(true);
  const [active, setActive] = useState("home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "work"];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const buttonClass = (id) =>
    `cursor-pointer rounded-full p-1 transition-all duration-300 ${active === id
      ? "text-amber-200 bg-amber-400/15 shadow-[0_0_15px_rgba(252,211,77,0.18)]"
      : "text-slate-200 hover:text-amber-300 hover:bg-slate-200/10"
    }`;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: showBar ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 100, bounce: 0.5, duration: 0.1 }}
      className="fixed bottom-0 w-full z-50"
    >
      <nav className="border-2 border-slate-700 flex flex-row items-center justify-between bg-slate-950 backdrop-blur-md bg-opacity-10 rounded-2xl px-4 mx-5 mb-3 py-2 pointer-events-auto">
        <button onClick={() => scrollToSection("home")} aria-label="Home" className={buttonClass("home")}>
          <FaHome className="text-xl size-7" />
        </button>
        <button onClick={() => scrollToSection("about")} aria-label="About" className={buttonClass("about")}>
          <MdWork className="text-xl size-7" />
        </button>
        <button onClick={() => scrollToSection("work")} aria-label="Work" className={buttonClass("work")}>
          <MdLocalPostOffice className="text-xl size-7" />
        </button>
      </nav>
    </motion.div>
  );
};

export default Bottombar;
