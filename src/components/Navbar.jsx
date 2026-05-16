import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice } from "react-icons/md";

export const Nav = () => {
  const [active, setActive] = useState("home");

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

  const navButtonClass = (id) =>
    `cursor-pointer rounded-full p-2 transition-all duration-300 ${active === id
      ? "text-amber-200 bg-amber-400/15 shadow-[0_0_20px_rgba(252,211,77,0.22)]"
      : "text-slate-300 hover:text-amber-300 hover:bg-slate-200/10"
    }`;

  return (
    <div className="fixed z-10 w-full flex justify-around items-center">
      <motion.nav
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-4/5 md:w-3/6 flex mt-5 border-2 bg-slate-950/30 backdrop-blur-xl rounded-xl border-slate-300/20 items-center justify-between py-3 px-6"
      >
        <motion.div
          className="font-tiny5 cursor-pointer text-slate-300 text-4xl font-bold"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "stiffness", stiffness: 200 }}
          onClick={() => scrollToSection("home")}
        >
          AR
        </motion.div>

        <div className="flex items-center gap-6 text-2xl font-mono font-semibold">
          <motion.button
            onClick={() => scrollToSection("home")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className={navButtonClass("home")}
            title="Home"
            aria-label="Home"
          >
            <FaHome />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("about")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className={navButtonClass("about")}
            title="About"
            aria-label="About"
          >
            <MdWork />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("work")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className={navButtonClass("work")}
            title="Experience"
            aria-label="Experience"
          >
            <MdLocalPostOffice />
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};