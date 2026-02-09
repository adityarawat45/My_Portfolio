import React, { useEffect } from 'react';
import {Box, Box2, Box3, Box4, Box5} from "./SkillBox";
import {BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql, BiLogoGoLang} from "react-icons/bi";
import {IoLogoPython, IoLogoReact, IoLogoNodejs} from "react-icons/io5";
import {RiJavaLine, RiNextjsFill} from "react-icons/ri";
import {SiDart, SiExpress, SiSpringboot, SiFlutter, SiFirebase, SiMongodb, SiPrisma, SiDocker} from "react-icons/si";
import {FaGithub, FaAws } from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import {LuAmpersand} from "react-icons/lu";
import { GitHubCalendar } from 'react-github-calendar';

function GithubActivity() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-24 w-full">
      
      {/* Desktop */}
      <div className="hidden md:block">
        <div className='text-6xl font-tiny5 font-bold text-slate-200 mb-7 flex flex-row items-center justify-center'>Github Activity</div>
        <GitHubCalendar
          username="adityarawat45"
          year={2026}
          colorScheme="dark"
          showMonthLabels
          showTotalCount
          blockRadius={10}
          blockSize={10}
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full px-4 overflow-x-auto">
        <GitHubCalendar
          username="adityarawat45"
          year={2026}
          blockSize={8}
          blockRadius={5}
          showMonthLabels={false}
        />
      </div>

    </div>
  );
}



const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="w-full px-4 md:px-16 lg:px-24 py-12">
      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-between">

        {/* LEFT: ABOUT SECTION */}
        <div className="flex flex-col items-center md:items-center md:ml-48">
          <h2 className="text-4xl md:text-6xl font-tiny5 font-bold text-slate-200 mb-6">
            About Me
          </h2>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full  border border-slate-500 rounded-xl bg-slate-900 p-5 md:p-7"
          >
            <p className="text-center md:text-center font-mono text-md md:text-xl text-slate-400 tracking-wide">
              Hey, I'm Aditya! A 21-year-old full-stack developer from India.
              I love working with MERN Stack and Flutter — but there’s more to it.
              I’m into open source, collaboration, and currently exploring AI/ML
              and Web3. Always open to turning ideas into real products.
            </p>
          </motion.div>
          <GithubActivity></GithubActivity>
        </div>

        {/* Github Section To be integrated!! */}
    
        {/* RIGHT: SKILLS SECTION */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-tiny5 font-bold text-slate-200 mb-6">
            Tech Stack
          </h2>

          <div className="flex flex-col gap-4 w-10/12 md:w-3/5">
            <div className="flex flex-wrap justify-center gap-4">
              <Box5 text="Java" img={<RiJavaLine />} />
              <Box5 text="Typescript" img={<BiLogoTypescript />} />
              <Box5 text="Javascript" img={<BiLogoJavascript />} />
              <Box5 text="Golang" img={<BiLogoGoLang />} />
              <Box5 text="Python" img={<IoLogoPython />} />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Box text="Prisma" img={<SiPrisma />} />
              <Box text="MongoDB" img={<SiMongodb />} />
              <Box text="Firebase" img={<SiFirebase />} />
              <Box text="Postgres" img={<BiLogoPostgresql />} />
              <Box text="Flutter" img={<SiFlutter />} />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Box3 text="NodeJS" img={<IoLogoNodejs />} />
              <Box3 text="React" img={<IoLogoReact />} />
              <Box3 text="NextJS" img={<RiNextjsFill />} />
              <Box3 text="Express" img={<SiExpress />} />
              <Box3 text="Springboot" img={<SiSpringboot />} />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Box2 text="AWS" img={<FaAws />} />
              <Box2 text="Docker" img={<SiDocker />} />
              <Box2 text="Much more" img={<LuAmpersand />} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
