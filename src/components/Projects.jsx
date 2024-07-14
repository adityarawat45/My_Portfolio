import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import {FaCode} from "react-icons/fa6"

const Projects = () => {
  return (
    <div>
      <motion.div
        className="text-2xl md:text-4xl cursor-pointer flex justify-center items-center font-tiny5 mt-2 md:mt-5 font-bold text-slate-200"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}>
        Some Builds
      </motion.div>
      <div className="flex flex-wrap px-2 md:px-20 justify-center mt-4 mb-5">
          {/* All Projects */}
          <ProjectCard title={"Blog Nest"} desc={"A modern, sleek blogging platform based on serverless architecture, designed to turn your thoughts into captivating posts effortlessly."} link={"https://blognest-beta.vercel.app/"} stack={"Typescript, React, Hono, Prisma, Cloudflare, Postgresql, Tailwindcss, Recoil"} icon={<FaGlobe />} ></ProjectCard>
          <ProjectCard title={"SMS-MMDU"} desc={"A cross-platform SMS app designed for MMDU, enabling smooth operations between students and management."} link={"https://github.com/adityarawat45/Student-Management-System.git"} stack={"Dart, Flutter, VelocityX, Firebase Auth, Cloud Firestore"} icon={<FaCode />} ></ProjectCard>
          <ProjectCard title={"My Portfolio"} desc={"Meticulously crafted to reflect my journey as a developer, offering visitors a glimpse into my development style and capabilities."} link={"https://devxaditya.vercel.app/"} stack={"Javascript, React, Tailwindcss, Framer Motion"} icon={<FaGlobe />} ></ProjectCard>
          <ProjectCard title={"AI Chat Assitant"} desc={"AI chat assistant leveraging OpenAI's capabilities to provide insightful responses with ability to generate stunnin images with Dall-E"} link={"https://github.com/adityarawat45/Virtual_Chat_Assistant.git"} stack={"Dart, Flutter, OpenAi api, Dall-E"} icon={<FaCode />} ></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({title,desc,link,icon,stack}) => {
    return (
      <div className="flex flex-col justify-between p-4 mx-2 my-2 md:my-4 md:mx-4 border-2 w-full md:w-2/5 border-slate-700 rounded-lg bg-slate-800 text-white">
         <div className="flex justify-between items-center">
           <div className="text-xl md:text-2xl font-bold font-mono text-fuchsia-400">{title}</div>
           <motion.a href={link} className="text-xl md:text-2xl text-slate-400" initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}>{icon}</motion.a>
         </div>
         <div className="text my-3 text-slate-400 text-sm  font-mono md:text-base">{desc}</div>
         <div className="text my-3 text-green-500 text-xs font-semibold font-mono md:text-sm flex items-start justify-start">
    <div className="text-xs md:text-sm">&bull;<span className="mr-2"></span>{stack}</div>
</div>
      </div>
    );
  };
  


