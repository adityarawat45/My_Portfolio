import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export const SmallNav = () => {
    return (
        <div className="w-full fixed z-10 bg-slate-950  bg-opacity-30 border-b-2 flex border-slate-700   justify-center items-center">
            <nav className="w-full flex items-center backdrop-blur-sm justify-between text-slate-300 px-3 py-2">
                <motion.div
                    className="font-tiny5 flex cursor-pointer justify-start text-3xl font-bold items-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    AR
                </motion.div>
                {/* <div className="flex items-center text-slate-300 justify-end gap-2 text-2xl">
                    <a href=""><motion.div initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1}} 
                    transition={{ type: "spring", stiffness: 200 }}><FaLinkedin /></motion.div></a>
                    <a href=""><motion.div initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}><FaSquareGithub /></motion.div></a>
                    <a href=""><motion.div initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ type: "spring", stiffness: 200 }}><FaSquareXTwitter /></motion.div></a>
                </div> */}
            </nav>
        </div>
    );
};

