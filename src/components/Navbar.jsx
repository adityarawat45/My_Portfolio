import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion"
import { useEffect, useRef } from "react";

export const Nav = () => {
        return (
        <div className="fixed z-10 w-full mb-20 flex justify-around items-center">
            <motion.nav className=" w-3/6 cursor-pointer flex border-2 bg-emerald-950 backdrop-blur-sm bg-opacity-30 mt-5 rounded-xl border-green-500 items-center justify-between py-2"
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }} 
            transition={{ type: "spring", stiffness: 200 }}>
            <motion.div
                    className="font-tiny5 flex ml-6 cursor-pointer text-green-50 justify-start text-5xl font-bold items-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "stiffness", stiffness: 200 }}
                >
                    AR
                </motion.div>
               <div className="flex items-center  justify-end text-green-50 gap-8 text-2xl mx-7">
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
           </motion.nav>
            </div>
        );
      };
      
     