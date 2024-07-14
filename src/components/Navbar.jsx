import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion"
import { useEffect, useRef } from "react";

export const Nav = () => {
        return (
        <div className="w-full mb-20  flex justify-around items-center">
            <nav className="w-3/6 flex border-r-4 border-b-4 bg-slate-950 bg-opacity-30 rounded-b-xl border-slate-700 items-center justify-between py-2">
            <motion.div
                    className="font-tiny5 flex ml-6 cursor-pointer text-slate-300 justify-start text-5xl font-bold items-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    AR
                </motion.div>
               <div className="flex items-center  justify-end text-slate-300 gap-8 text-2xl mx-7">
                    <a href="https://www.linkedin.com/in/aditya-rawat-231511249"><motion.div initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1}} 
                    transition={{ type: "spring", stiffness: 200 }}><FaLinkedin /></motion.div></a>
                    <a href="https://github.com/adityarawat45"><motion.div initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}><FaSquareGithub /></motion.div></a>
                    <a href="https://x.com/adityarawat45?"><motion.div initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}><FaSquareXTwitter /></motion.div></a>
                 
                </div>
           </nav>
            </div>
        );
      };
      
     