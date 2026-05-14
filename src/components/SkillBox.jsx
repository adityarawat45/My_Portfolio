import React from 'react';
import { motion, useInView } from 'framer-motion';

export const Box = ({ text, img }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  
  return (
    <motion.div
      className={`py-1 cursor-pointer px-3 md:py-1 md:px-3 w-fit bg-sky-700 border-r-4 border-b-4 border-sky-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
    >
      <div className='flex flex-row justify-evenly gap-1.5 md:gap-2 items-center text-sm md:text-base font-bold font-mono text-slate-950'>
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
      className={`py-1 px-3 cursor-pointer md:py-1 md:px-3 w-fit bg-amber-700 border-r-4 border-b-4 border-amber-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
      ref={ref}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, bounce: 0.4, type: 'spring' }}
    >
      <div className='flex flex-row justify-evenly gap-1.5 md:gap-2 items-center text-sm md:text-base font-bold font-mono text-slate-950'>
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
      className={`py-1 px-3 cursor-pointer md:py-1 md:px-3 w-fit bg-lime-700 border-r-4 border-b-4 border-lime-900 rounded-b-lg rounded-tr-md rounded-t-lg rounded-l-lg`}
    >
      <div className='flex flex-row justify-evenly gap-1.5 md:gap-2 items-center text-sm md:text-base font-bold font-mono text-slate-950'>
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
      className={`py-1 px-3 cursor-pointer md:py-1 md:px-3 w-fit bg-red-800 border-r-4 border-b-4 border-red-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
    >
      <div className='flex flex-row justify-evenly gap-1.5 md:gap-2 items-center text-sm md:text-base font-bold font-mono text-slate-950'>
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
      className={`py-1 cursor-pointer px-3 md:py-1 md:px-3 w-fit bg-fuchsia-700 border-r-4 border-b-4 border-fuchsia-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}
    >
      <div className='flex flex-row justify-evenly gap-1.5 md:gap-2 items-center text-sm md:text-base font-bold font-mono text-slate-950'>
        <div>{img}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};


