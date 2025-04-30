import React from 'react'
import {motion,useInView} from "framer-motion"

const Work = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex-col justify-center px-4 md:px-6'>
        <div className="text-4xl md:text-6xl font-tiny5 md:mt-24 md:mb-8 mt-8 text-center font-bold text-slate-200">Work & Exp.</div>
        {/* Technosoft */}
        {<WorkTemplate profile={"Backend Developer Intern"} org={"AX Technosoft"} Location={"Gurugram"} mode={"On-Site"} start={"Sept, 2024"} end={"Current"}></WorkTemplate>}
        {/* Techlive */}
        {<WorkTemplate profile={"MERN Stack Trainee"} org={"Techlive"} mode={"Remote"} Location={"Remote"} start={"June, 2024"} end={"Aug, 2024"} pointOne={"Worked on a variety of web development projects using the MERN stack."} pointTwo={"Learned about building dynamic and responsive web applications. "} pointThree={"Gained practical experience and sharpened coding skills through hands-on projects and exercises."}></WorkTemplate>}
        </div>
    </div>
  )
}

 {/* //Work Experince card */}
const WorkTemplate = ({profile,org,Location,start,end,pointOne,pointTwo,pointThree}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <div className='flex flex-row justify-center my-5 items-center'>
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0.5 }} 
      whileTap={{ scale: 0.9}}
      // whileHover={{ scale: 1.1 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
     className="flex shadow-xl flex-col justify-center w-full backdrop-blur-lg cursor-pointer md:w-3/4 border-r-2 border-b-2 border-l-2 border-t-2 rounded-b-xl rounded-t-xl border-slate-500 bg-slate-800 ">
    <div className='flex flex-row justify-between items-end'>
    <div>
    <div className="text-xl md:text-4xl font-mono mt-4 md:mt-5 ml-4 md:ml-5  text-left font-bold text-fuchsia-400">{profile}</div>
    <div className="text-base md:text-2xl font-mono ml-4 md:ml-5 text-left font-semibold text-green-400 flex items-center space-x-1">
<span>{org}</span>
<span>&bull;</span>
<span>{Location}</span>
</div>
    <div className='block md:hidden lg:hidden  text-left ml-4 text-xs mx-2 font-mono font-semibold text-amber-400'>{start} - {end}</div>
    </div>
    <div className='hidden md:block text-right mr-5 font-mono font-semibold text-amber-400'>{start} - {end}</div>
    </div>
    <div className="mt-2 text-left lg:mt-5 px-4 font-mono font-medium text-sm md:text-base text-slate-400 pb-3 tracking-wide md:tracking-wider">&bull;<span className="mr-2"/>{pointOne}<br/>&bull;<span className="mr-2"/>{pointTwo}<br/>&bull;<span className="mr-2"/>{pointThree}</div>
     </motion.div>
    </div>
  )
}

export default Work