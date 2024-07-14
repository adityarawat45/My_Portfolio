import {Box,Box2,Box3,Box4,Box5} from "./SkillBox"
import {BiLogoTypescript,BiLogoJavascript,BiLogoPostgresql} from "react-icons/bi"
import { IoLogoPython,IoLogoReact,IoLogoNodejs  } from "react-icons/io5";
import {RiJavaLine,RiNextjsFill }  from "react-icons/ri"
import { SiDart ,SiExpress,SiRecoil,SiFlutter,SiFirebase,SiMongodb,SiPrisma,SiDocker} from "react-icons/si";
import { FaGithub,FaAws } from "react-icons/fa";
import {motion} from "framer-motion"
import {LuAmpersand} from "react-icons/lu"

const About = () => {
  return (
    <div>
      <div className="sm:px-2 mt-12 flex justify-center md:mt-20 px-5 md:px-20">
      {/* About */}
      <div className="flex flex-col justify-center w-full md:w-3/6  border-b-8 border-r-4 border-l-2 border-t-2 border-l-sky-400 border-t-sky-400 rounded-b-xl rounded-t-xl border-slate-600 bg-slate-800 items-center">
          <motion.div className="text-2xl md:text-4xl cursor-pointer font-tiny5 mt-2 md:mt-5  font-bold text-slate-200" initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}>
            About Me
          </motion.div>
          <div className="mt-2 text-center lg:mt-5 px-4 font-mono font-extralight md:font-medium text-sm md:text-lg text-slate-400 pb-3 tracking-normal md:tracking-wide">Hey, I'm Aditya! A 19-year-old full-stack developer from India. I love working with MERN Stack and Flutter but trust me, there's more to it. I'm super into open-source projects and always up for connecting and collaborating. Ready to dive in and turn cool ideas into reality!</div>
      </div>
    </div>
    {/* //skills */}
     <div className="mt-7 md:mt-14 flex flex-col justify-center px-10 items-center">
      <motion.div className="mb-3 md:mb-6 font-tiny5 text-2xl md:text-4xl font-bold cursor-pointer text-slate-200" initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}>Tech Stack</motion.div>
      <div className="flex flex-wrap my-1 md:my-2 justify-center items-center gap-3 md:gap-6">
        <Box4 text={"Java"} img={<RiJavaLine />}></Box4>
        <Box2 img={<BiLogoTypescript />} text={"Typescript"} />
        <Box5 img={<BiLogoJavascript />} text={"Javascript"}></Box5>
        <Box img={<SiDart />}text={"Dart"}></Box>
        <Box3 img={<IoLogoPython/>} text={"Python"}></Box3>
      </div>
      <div className="flex flex-wrap my-2 justify-center items-center gap-3 md:gap-6">
      <Box5 img={<SiPrisma />} text={"Prisma"}></Box5>
        <Box3 img={<SiMongodb />} text={"MongoDB"}></Box3>
        <Box4 img={<SiFirebase />} text={"Firebase"}></Box4>
        <Box2 img={<BiLogoPostgresql />} text={"Postgres"}></Box2>
        <Box img={<SiDocker />} text={"Docker"}></Box>
        {/* <div className="block md:hidden lg:hidden"><Box4 img={<FaAws />} text={"AWS"}></Box4></div> */}
      </div>
      <div className="flex flex-wrap my-1 md:my-2 justify-center items-center gap-3 md:gap-6">
        <Box4 img={<IoLogoNodejs />} text={"NodeJS"}></Box4>
        <Box img={<IoLogoReact />}text={"React"} />
        <Box5 img={<RiNextjsFill />} text={"NextJs"}></Box5>
        <Box3 img={<SiExpress />} text={"Express"}></Box3>
        <Box2 img={<SiRecoil />} text={"Recoil"}></Box2>
      </div>

      <div className="flex flex-wrap my-2 justify-center items-center gap-3 md:gap-6">
        <Box2 text={"AWS"} img={<FaAws/>} />
        <Box text={"Flutter"} img={<SiFlutter />} />
        <Box4 text={"much more"} img={<LuAmpersand />}></Box4>
        {/* <div className="hidden md:block lg:block"><Box4 img={<FaAws />} text={"AWS"}></Box4></div> */}
      </div>
     </div>
    </div>
  )
}

export default About

