import React, { useEffect } from 'react';
import { Box, Box2, Box3, Box4, Box5 } from "./SkillBox";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql, BiLogoGoLang } from "react-icons/bi";
import { IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { RiJavaLine, RiNextjsFill } from "react-icons/ri";
import { SiDart, SiExpress, SiSpringboot, SiFlutter, SiFirebase, SiMongodb, SiPrisma, SiDocker } from "react-icons/si";
import { FaGithub, FaAws } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { LuAmpersand } from "react-icons/lu";
import { GitHubCalendar } from 'react-github-calendar';

function GithubActivity() {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Desktop */}
      <div className="hidden md:flex flex-col items-center w-full max-w-full overflow-x-auto pb-4">
        <div className='text-4xl lg:text-6xl font-tiny5 font-bold text-slate-200 mb-8 flex flex-row items-center justify-center'>Github Activity</div>
        <GitHubCalendar
          username="adityarawat45"
          year={2026}
          colorScheme="dark"
          showMonthLabels
          showTotalCount
          blockRadius={10}
          blockSize={12}
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full px-4 overflow-x-auto pb-4">
        <div className='text-4xl font-tiny5 font-bold text-slate-200 mb-6 flex flex-row items-center justify-center'>Github Activity</div>
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
    <div className="w-full px-4 md:px-16 lg:px-24 pt-12 pb-6 md:py-16 lg:py-24 flex flex-col items-center">
      
      {/* ABOUT SECTION */}
      <div className="flex flex-col items-center w-full max-w-4xl order-1 mb-10 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-tiny5 font-bold text-slate-200 mb-6 md:mb-8">
          About Me
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-full border border-slate-500 rounded-xl bg-slate-900/80 backdrop-blur-sm p-4 md:p-10 shadow-[0_0_40px_rgba(30,41,59,0.3)]"
        >
          <p className="text-center font-mono text-sm md:text-xl text-slate-400 tracking-wide leading-relaxed">
            Hey, I'm Aditya! I'm a 21-year-old Full-Stack Engineer based in India. 
            I love diving into complex codebases and building software that actually scales. 
            For me, it's not just about getting things to work—it's about writing clean, 
            intentional code. I'm always looking for the next opportunity to turn a great idea 
            into a real product.
          </p>
        </motion.div>
      </div>

      {/* TECH STACK SECTION */}
      <div className="flex flex-col items-center w-full max-w-5xl order-3 md:order-2 mb-0 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-tiny5 font-bold text-slate-200 mb-6 md:mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Box5 text="Java" img={<RiJavaLine />} />
            <Box5 text="Typescript" img={<BiLogoTypescript />} />
            <Box5 text="Javascript" img={<BiLogoJavascript />} />
            <Box5 text="Golang" img={<BiLogoGoLang />} />
            <Box5 text="Python" img={<IoLogoPython />} />
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Box text="Prisma" img={<SiPrisma />} />
            <Box text="MongoDB" img={<SiMongodb />} />
            <Box text="Firebase" img={<SiFirebase />} />
            <Box text="Postgres" img={<BiLogoPostgresql />} />
            <Box text="Flutter" img={<SiFlutter />} />
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Box3 text="NodeJS" img={<IoLogoNodejs />} />
            <Box3 text="React" img={<IoLogoReact />} />
            <Box3 text="NextJS" img={<RiNextjsFill />} />
            <Box3 text="Express" img={<SiExpress />} />
            <Box3 text="Springboot" img={<SiSpringboot />} />
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Box2 text="AWS" img={<FaAws />} />
            <Box2 text="Docker" img={<SiDocker />} />
            <Box2 text="Much more" img={<LuAmpersand />} />
          </div>
        </div>
      </div>

      {/* GITHUB SECTION */}
      <div className="flex flex-col items-center w-full max-w-5xl order-2 md:order-3 mb-10 md:mb-0">
        <GithubActivity />
      </div>

    </div>
  );
};

export default About;
