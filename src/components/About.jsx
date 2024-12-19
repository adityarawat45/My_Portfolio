import React from 'react';
import {Box, Box2, Box3, Box4, Box5} from "./SkillBox";
import {BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql} from "react-icons/bi";
import {IoLogoPython, IoLogoReact, IoLogoNodejs} from "react-icons/io5";
import {RiJavaLine, RiNextjsFill} from "react-icons/ri";
import {SiDart, SiExpress, SiRecoil, SiFlutter, SiFirebase, SiMongodb, SiPrisma, SiDocker} from "react-icons/si";
import {FaGithub, FaAws} from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import {LuAmpersand} from "react-icons/lu";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      <div className="sm:px-2 cursor-pointer mt-12 flex justify-center md:mt-20 px-5 md:px-20">
        {/* About */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 0, scale: 0 }} 
          // whileHover={{scale:1.05}}
          whileTap={{scale: 0.9}}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
          transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
          className="flex flex-col justify-center mt-2 w-full md:w-3/6 border-b-2 border-r-2 border-l-2 border-t-2 rounded-b-xl rounded-t-xl border-slate-500 bg-slate-800 items-center">
          <div className="text-4xl md:text-6xl font-tiny5 mt-2 md:mt-5 font-bold text-slate-200">
            About Me
          </div>
          <div className="mt-2 text-center lg:mt-5 px-4 font-mono font-extralight md:font-medium text-sm md:text-lg text-slate-400 pb-3 tracking-normal md:tracking-wide">
            Hey, I'm Aditya! A 20-year-old full-stack developer from India. I love working with MERN Stack and Flutter but trust me, there's more to it. I'm super into open-source projects and always up for connecting and collaborating. Ready to dive in and turn cool ideas into reality!
          </div>
        </motion.div>
      </div>
      {/* Skills */}
      <div className="mt-7 flex flex-col justify-center px-4 items-center">
        <div className="mb-3 md:mt-20 md:mb-8 font-tiny5 text-4xl mt-4 md:text-6xl font-bold text-slate-200">Tech Stack</div>
        <div  
         className="flex flex-wrap my-1 md:my-2 justify-center items-center gap-3 md:gap-6">
          <Box5 text={"Java"} img={<RiJavaLine />} />
          <Box5 img={<BiLogoTypescript />} text={"Typescript"} />
          <Box5 img={<BiLogoJavascript />} text={"Javascript"} />
          <Box5 img={<SiDart />} text={"Dart"} />
          <Box5 img={<IoLogoPython />} text={"Python"} />
        </div>
        <div className="flex flex-wrap my-2 justify-center items-center gap-3 md:gap-6">
          <Box img={<SiPrisma />} text={"Prisma"} />
          <Box img={<SiMongodb />} text={"MongoDB"} />
          <Box img={<SiFirebase />} text={"Firebase"} />
          <Box img={<BiLogoPostgresql />} text={"Postgres"} />
          <Box text={"Flutter"} img={<SiFlutter />} />
        </div>
        <div className="flex flex-wrap my-1 md:my-2 justify-center items-center gap-3 md:gap-6">
          <Box3 img={<IoLogoNodejs />} text={"NodeJS"} />
          <Box3 img={<IoLogoReact />} text={"React"} />
          <Box3 img={<RiNextjsFill />} text={"NextJs"} />
          <Box3 img={<SiExpress />} text={"Express"} />
          <Box3 img={<SiRecoil />} text={"Recoil"} />
        </div>
        <div className="flex flex-wrap my-2 justify-center items-center gap-3 md:gap-6">
          <Box2 text={"AWS"} img={<FaAws />} />
          <Box2 img={<SiDocker />} text={"Docker"} />
          <Box2 text={"much more"} img={<LuAmpersand />} />
        </div>
      </div>
    </div>
  );
}

export default About;
