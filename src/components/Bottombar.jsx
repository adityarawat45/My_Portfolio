import { useEffect, useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice } from "react-icons/md";
import { motion } from "framer-motion";

const Bottombar = () => {
  const [showBar, setShowBar] = useState(true);
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: showBar ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 100, bounce: 0.5, duration: 0.1 }}
      className="fixed bottom-0 w-full z-50"
    >
      <nav className="border-2 border-slate-700 flex flex-row items-center justify-between bg-slate-950 backdrop-blur-md bg-opacity-10 rounded-2xl px-8 mx-5 mb-3 py-4 pointer-events-auto">
        <button onClick={() => scrollToSection("home")} aria-label="Home" className="text-slate-200 cursor-pointer">
          <FaHome className="text-xl size-7" />
        </button>
        <button onClick={() => scrollToSection("about")} aria-label="About" className="text-slate-200 cursor-pointer">
          <MdWork className="text-xl size-7" />
        </button>
        <button onClick={() => scrollToSection("work")} aria-label="Work" className="text-slate-200 cursor-pointer">
          <MdLocalPostOffice className="text-xl size-7" />
        </button>
      </nav>
    </motion.div>
  );
};

export default Bottombar;
