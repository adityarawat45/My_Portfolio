import React from 'react'
import {motion} from "framer-motion"
import {IoMail} from "react-icons/io5"
import {FaGithubSquare,FaEnvelope} from "react-icons/fa"
import { FaSquareXTwitter,FaLinkedin} from "react-icons/fa6"
  m
const Footer = () => {
  return (<footer className='px-4 md:px-24'>
     <div className='border-t border-slate-700'>
        <div className='mt-3 md:mt-5 md:mb-4 md:px-0 flex flex-col md:flex-row justify-center md:justify-between items-center'>
            <div className= 'flex flex-row justify-between items-center gap-10 text-slate-400'>
              <motion.a href='mailto:rawataditya193@gmail.com' className='inline-block relative  md:text-3xl text-2xl' initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}> <FaEnvelope /></motion.a>
              <motion.a href='https://www.linkedin.com/in/aditya-rawat-231511249' className='inline-block md:text-3xl text-2xl relative' initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}> <FaLinkedin /></motion.a>
              <motion.a href='https://x.com/adityarawat45?' className='inline-block relative  md:text-3xl text-2xl ' initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}><FaSquareXTwitter /></motion.a>
              <motion.a href="https://github.com/adityarawat45" className="inline-block text-2xl md:text-3xl relative "
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200 }}>
              <FaGithubSquare></FaGithubSquare>
              </motion.a>
            </div>
            <div className='text-sm md:text-lg mt-3 mb-3 font-semibold font-mono text-slate-400'>Thanks for visiting!👋</div>
        </div>
     </div>
  </footer>
  )
}

export default Footer