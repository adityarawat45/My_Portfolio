import React from 'react';
import { motion, useInView } from 'framer-motion';

export const Box = ({ text, img }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  
  return (
    <motion.div
      className={`py-1.5 cursor-pointer px-4 md:py-2 md:px-5 w-fit bg-sky-700 border-r-4 border-b-4 border-sky-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
    >
      <div className='flex flex-row justify-evenly gap-2 md:gap-4 items-center text-sm md:text-lg font-bold font-mono text-slate-950'>
        <div>{img}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};

export const Box2 = ({ text, img }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className={`py-1.5 px-4 cursor-pointer md:py-2 md:px-5 w-fit bg-amber-700 border-r-4 border-b-4 border-amber-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
    >
      <div className='flex flex-row justify-evenly gap-2 md:gap-4 items-center text-sm md:text-lg font-bold font-mono text-slate-950'>
        <div>{img}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};

export const Box3 = ({ text, img }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
      className={`py-1.5 px-4 cursor-pointer md:py-2 md:px-5 w-fit bg-lime-700 border-r-4 border-b-4 border-lime-900 rounded-b-lg rounded-tr-md rounded-t-lg rounded-l-lg`}
    >
      <div className='flex flex-row justify-evenly gap-2 md:gap-4 items-center text-sm md:text-lg font-bold font-mono text-slate-950'>
        <div>{img}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};

export const Box4 = ({ text, img }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
      className={`py-1.5 px-4 cursor-pointer md:py-2 md:px-5 w-fit bg-red-800 border-r-4 border-b-4 border-red-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
    >
      <div className='flex flex-row justify-evenly gap-2 md:gap-4 items-center text-sm md:text-lg font-bold font-mono text-slate-950'>
        <div>{img}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};

export const Box5 = ({ text, img }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
      className={`py-1.5 cursor-pointer px-4 md:py-2 md:px-5 w-fit bg-fuchsia-700 border-r-4 border-b-4 border-fuchsia-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
    >
      <div className='flex flex-row justify-evenly gap-2 md:gap-4 items-center text-sm md:text-lg font-bold font-mono text-slate-950'>
        <div>{img}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};


