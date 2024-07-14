import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import prof from '../images/prof.png';

const Hero = () => {
  const englishName = "Aditya";
  const hindiName = "आदित्य";
  const [name, setName] = useState('');
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
          setName((prev) => prev + (isEnglish ? englishName : hindiName)[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isEnglish]);

  return (
    <div className='md:grid md:grid-cols-2'>
      <div className="flex flex-col justify-center text-left px-3 md:px-10">
        <div className="relative">
          <h1 className="hidden md:block text-6xl  mx-2 mt-5  text-slate-300 pb-2 md:ml-20 font-bold">{`I'm ${name}`}<span className="ccursor animate-blink font-thin">|</span></h1>
          <h1 className="block md:hidden lg:hidden text-6xl md:text-7xl mx-2 mt-5  text-slate-300 pb-2 md:ml-20 font-bold">{`I'm`}</h1>
          <h1 className='block md:hidden lg:hidden text-6xl md:text-7xl mx-2   text-slate-300 pb-2 md:ml-20 font-bold'>{name}<span className="cursor  animate-blink font-thin">|</span></h1>
        </div>
        <div className=''></div>
        <div className="md:ml-20 mx-2 my-2 text-lg md:text-2xl font-mono text-slate-300 md:pb-5 font-bold">
          Lazy Full-Stack Dev.
        </div>
        <div className=" md:ml-20 mx-2 md:text-2xl text-lg font-mono text-slate-300 font-bold ">
          Converts <span className="text-amber-400">ideas</span> into <span className="text-green-700">code.</span>
        </div>
        <div className='vlock md:hidden lg:hidden flex flex-row justify-center my-3'>
          <img className='size-20 rounded-full hover:animate-spin cursor-pointer' src={prof}></img>
        </div>
        <div className="flex  md:ml-20 mt-5 md:mt-8 md:w-3/6 items-center text-amber-400 justify-evenly md:justify-between md:gap-2 text-2xl">
          <a href="https://www.linkedin.com/in/aditya-rawat-231511249">
            <motion.div
              className="inline-block relative mx-3 md:mx-0"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiLinkedin />
            </motion.div>
          </a>
          <a href="https://github.com/adityarawat45">
            <motion.div
              className="inline-block relative mx-3 md:mx-0"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiGithub />
            </motion.div>
          </a>
          <a href="https://x.com/adityarawat45?">
            <motion.div
              className="inline-block relative mx-3 md:mx-0"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaXTwitter />
            </motion.div>
          </a>
          <button className="hidden md:block rounded-2xl text-lg border-2 mb-2 border-dashed border-gray-900 bg-slate-500 px-3 py-1 font-semibold uppercase text-gray-900 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_rgb(168,106,55)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Resume
          </button>
        </div>
        <div className="flex justify-center mt-4 items-center">
          <button className=" block text-base md:hidden lg:hidden rounded-2xl border-2 mb-2 border-dashed border-gray-900 bg-slate-500 px-3 py-1 font-semibold uppercase text-gray-900 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_rgb(168,106,55)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Resume
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden md:block">
          <img className="md:w-56 lg:w-64 border-l-2 border-b-2 border-t-2 border-r-2 border-solid border-stone-600 rounded-full" src={prof} alt="Aditya" />
        </div>
      </div>
    </div> 
  );
};

export default Hero;
