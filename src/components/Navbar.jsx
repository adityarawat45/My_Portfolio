import {motion} from "framer-motion"
import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice } from "react-icons/md";

export const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <div className="fixed z-10 w-full flex justify-around items-center">
      <motion.nav 
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.98 }} 
        transition={{ type: "spring", stiffness: 200 }}
        className="w-4/5 md:w-3/6 flex mt-5 border-2 bg-slate-950 backdrop-blur-md bg-opacity-70 rounded-xl border-slate-700 items-center justify-between py-3 px-6"
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
        
        <div className="flex items-center text-slate-300 gap-8 text-2xl font-mono font-semibold">
          <motion.button 
            onClick={() => scrollToSection("home")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: "#fcd34d" }} 
            className="cursor-pointer transition-colors"
            title="Home"
            aria-label="Home"
          >
            <FaHome />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection("about")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: "#fcd34d" }} 
            className="cursor-pointer transition-colors"
            title="About"
            aria-label="About"
          >
            <MdWork />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection("work")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: "#fcd34d" }} 
            className="cursor-pointer transition-colors"
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