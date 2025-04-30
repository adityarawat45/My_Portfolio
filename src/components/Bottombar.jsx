import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice } from "react-icons/md";

const Bottombar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col justify-end w-full h-screen fixed z-10 pointer-events-none">
      <nav className="border-2 border-slate-700 flex flex-row items-center justify-between bg-slate-950 backdrop-blur-md bg-opacity-30 rounded-lg px-5 mx-5 mb-3 py-2 pointer-events-auto">
        <button
          onClick={() => scrollToSection("home")}
          aria-label="Home"
          className="text-white"
        >
          <FaHome className="text-xl" />
        </button>
        <button
          onClick={() => scrollToSection("work")}
          aria-label="Work"
          className="text-white"
        >
          <MdWork className="text-xl" />
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          aria-label="Contact"
          className="text-white"
        >
          <MdLocalPostOffice className="text-xl" />
        </button>
      </nav>
    </div>
  );
};

export default Bottombar;
