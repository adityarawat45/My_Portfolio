import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GiNightSleep } from "react-icons/gi";
import { RiRadioButtonLine } from "react-icons/ri";
import prof from "../images/prof.png";
import axios from "axios";


function Status() {
  //Real time handler stuff

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //Discord Active Status handler stuff
  const [status, setStatus] = useState("Offline");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await axios.get(
          "https://api.lanyard.rest/v1/users/927385744740347925",
        );

        const rawStatus = res?.data?.data?.discord_status ?? "offline";

        const status =
          rawStatus.length > 0
            ? rawStatus[0].toUpperCase() + rawStatus.slice(1)
            : "Offline";
        setStatus(status);
      } catch {
        setStatus("Offline");
      }
    }

    fetchStatus();
  }, []);

  return (
    <div className="flex flex-row justify-center md:justify-evenly gap-10 text-slate-300 font-semibold text-lg md:text-2xl">
      <div className="flex flex-row items-center justify-center">
        {time.toLocaleTimeString()}
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        {status === "Online" ? (
          /* ONLINE ICON */
          <div className="text-green-500">
            <RiRadioButtonLine></RiRadioButtonLine>
          </div>
        ) : (
          /* OFFLINE ICON */
          <div className="text-amber-300">
            <GiNightSleep></GiNightSleep>
          </div>
        )}
        {status}
      </div>
    </div>
  );
};


const Hero = () => {
  //Hero Section handler Stuff
  const englishName = "Aditya";
  const hindiName = "आदित्य";
  const [name, setName] = useState("");
  const [isEnglish, setIsEnglish] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setName((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIsEnglish((prev) => !prev);
        }
      } else {
        if (charIndex < (isEnglish ? englishName : hindiName).length) {
          setName(
            (prev) => prev + (isEnglish ? englishName : hindiName)[charIndex],
          );
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isEnglish]);

  return (
    <div className="md:grid md:grid-cols-2 md:h-screen justify-center">
      <div className="flex flex-col justify-center text-left px-3 md:px-10">
        <div className="relative py-5">
          <h1 className="hidden md:block text-6xl md:text-8xl  mx-2 mt-5 text-slate-300 pb-2 md:ml-20 font-bold">
            {`I'm ${name}`}
            <span className="ccursor animate-blink font-thin">|</span>
          </h1>
          <h1 className="block md:hidden lg:hidden text-6xl md:text-8xl mx-2 mt-5  text-slate-300  md:ml-20 font-bold">{`I'm`}</h1>
          <h1 className="block md:hidden lg:hidden text-6xl md:text-8xl mx-2 text-slate-300 md:ml-20 font-bold">
            {name}
            <span className="cursor  animate-blink font-thin">|</span>
          </h1>
        </div>
        <div className="md:ml-20 mx-2 mt-5 md:mt-7 text-lg md:text-3xl font-mono text-slate-300 font-bold">
          A Full-Stack Dev.
        </div>
        <div className=" md:ml-20 mx-2 md:text-3xl text-lg font-mono text-slate-300 font-bold ">
          Does more than just crafting{" "}
          <span className="text-rose-600">bugs </span> into{" "}
          <span className="text-green-500">features.</span>
        </div>

        <div className="md:hidden lg:hidden flex flex-col">
          <div className="flex flex-row justify-center mt-5 mb-5">
            <img
              src={prof}
              className="cursor:pointer mt-3 focus:animate-tilt size-36 rounded-3xl cursor-pointer"
            ></img>
          </div>
            <Status></Status>
          <div className="flex flex-row justify-center"> </div>
        </div>

        <div className="flex md:ml-20 mt-8 md:mt-8 md:w-3/6 items-center text-amber-400 justify-evenly md:justify-between md:gap-2 text-2xl">
          <a href="https://www.linkedin.com/in/aditya-rawat-231511249">
            <motion.div
              className="inline-block relative mx-3 md:mx-0"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 0.9 }}
              transition={{ type: "stiffness", stiffness: 200 }}
            >
              <FiLinkedin />
            </motion.div>
          </a>
          <a href="https://github.com/adityarawat45">
            <motion.div
              className="inline-block relative mx-3 md:mx-0"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 0.9 }}
              transition={{ type: "stiffness", stiffness: 200 }}
            >
              <FiGithub />
            </motion.div>
          </a>
          <a href="https://x.com/adityarawat45?">
            <motion.div
              className="inline-block relative mx-3 md:mx-0"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 0.9 }}
              transition={{ type: "stiffness", stiffness: 200 }}
            >
              <FaXTwitter />
            </motion.div>
          </a>
          <a
            href="/Aditya_Rawat.pdf"
            download={"Aditya_Rawat.pdf"}
            className="hidden md:block "
          >
            <button className=" rounded-2xl text-lg border-2 mb-2 border-dashed border-gray-900 bg-slate-500 px-3 py-1 font-semibold uppercase text-gray-900 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_rgb(168,106,55)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Resume
            </button>
          </a>
        </div>
        <div className="flex justify-center mt-4 items-center">
          <a
            href="/Aditya_Rawat.pdf"
            download={"Aditya_Rawat.pdf"}
            className="block text-base md:hidden lg:hidden "
          >
            <button className=" rounded-2xl border-2 mt-2 border-dashed border-gray-900 bg-slate-500 px-3 py-1 font-semibold uppercase text-gray-900 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_rgb(168,106,55)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden md:block">
          <img
            className="border-l-2 border-b-2 border-t-2 cursor-pointer border-r-2 border-solid border-stone-600 rounded-3xl size-96"
            src={prof}
            alt="Aditya"
          />
          <div className="mt-5"><Status></Status></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
