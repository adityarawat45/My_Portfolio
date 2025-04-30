import { useEffect, useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice } from "react-icons/md";
import { motion } from "framer-motion";

const Bottombar = () => {
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }

      lastScrollY.current = currentScrollY;

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowBar(true);
      }, 150); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: showBar ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
      className="fixed bottom-0 w-full z-50"
    >
      <nav className="border-2 border-slate-700 flex flex-row items-center justify-between bg-slate-950 backdrop-blur-md bg-opacity-30 rounded-3xl px-5 mx-5 mb-3 pb-3 pt-5 pointer-events-auto">
        <motion.div
          className="inline-block relative mx-3 md:mx-0"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 0.9}} 
          transition={{ type: "stiffness", stiffness: 200 }}>
                  <button onClick={() => scrollToSection("home")} aria-label="Home" className="text-white">
                      <FaHome className="text-xl" />
        </button>
        </motion.div>
        <motion.div
          className="inline-block relative mx-3 md:mx-0"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 0.9}} 
          transition={{ type: "stiffness", stiffness: 200 }}>
                    <button onClick={() => scrollToSection("about")} aria-label="About" className="text-white">
          <MdWork className="text-xl" />
        </button>
        </motion.div>
        <motion.div
          className="inline-block relative mx-3 md:mx-0"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 0.9}} 
          transition={{ type: "stiffness", stiffness: 200 }}>
        <button onClick={() => scrollToSection("work")} aria-label="Work" className="text-white">
          <MdLocalPostOffice className="text-xl" />
        </button>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Bottombar;