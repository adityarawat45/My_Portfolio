import React from "react";
import { motion, useInView } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div>
      <div className="text-4xl md:text-6xl flex justify-center items-center font-tiny5 md:mt-24 md:mb-8 mt-4 font-bold text-slate-200">
        Some Builds
      </div>
      <div className="flex flex-wrap px-2 md:px-20 justify-center mt-4 mb-5">
        {/* All Projects */}
        <ProjectCard 
          title="Blog Nest" 
          desc="A modern, sleek blogging platform based on serverless architecture, designed to turn your thoughts into captivating posts effortlessly." 
          link="https://blognest-beta.vercel.app/" 
          stack="Typescript, React, Hono, Prisma, Cloudflare, Postgresql, Tailwindcss, Recoil" 
          icon={<FaGlobe />} 
        />
        <ProjectCard 
          title="SMS-MMDU" 
          desc="A cross-platform SMS app designed for MMDU, enabling smooth operations between students and management." 
          link="https://github.com/adityarawat45/Student-Management-System.git" 
          stack="Dart, Flutter, VelocityX, Firebase Auth, Cloud Firestore" 
          icon={<FaCode />} 
        />
        <ProjectCard 
          title="My Portfolio" 
          desc="A Meticulously crafted Portfolio by me to reflect my journey as a developer, offering visitors a glimpse into my development style and capabilities." 
          link="https://devxaditya.vercel.app/" 
          stack="Javascript, React, Tailwindcss, Framer Motion" 
          icon={<FaGlobe />} 
        />
        <ProjectCard 
          title="Drizzle" 
          desc="Drizzle is the most complete chat app with a minimal and aesthetic UI, designed to provide a seamless and visually pleasing communication experience. " 
          link="https://github.com/adityarawat45/Drizzle_ChatApp.git" 
          stack="Dart, Flutter, Firebase Auth, Cloud Firestore" 
          icon={<FaCode />} 
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, desc, link, icon, stack }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0.5 }} 
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
      className="flex flex-col justify-between cursor-pointer p-4 mx-2 my-2 md:my-4 md:mx-4 border-2 w-full md:w-2/5 border-slate-500 rounded-lg bg-slate-900 text-white"
    >
      <div className="flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold font-mono text-fuchsia-400">{title}</div>
        <motion.a 
          href={link} 
          className="text-xl md:text-2xl text-slate-400" 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }} 
          transition={{ type: "spring", stiffness: 200 }}
        >
          {icon}
        </motion.a>
      </div>
      <div className="text my-3 text-slate-400 text-sm font-mono md:text-xl">{desc}</div>
      <div className="text my-3 text-green-500 text-sm font-semibold font-mono md:text-xl flex items-start justify-start">
        <div className="text-xs md:text-base">&bull;<span className="mr-2"></span>{stack}</div>
      </div>
    </motion.div>
  );
};

export default Projects;



