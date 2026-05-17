import React from "react";
import { motion, useInView } from "framer-motion";

const Work = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col justify-center px-4 md:px-6">
        <div className="text-4xl md:text-6xl font-tiny5 mt-6 mb-6 md:mt-24 md:mb-12 text-center font-bold text-slate-200">
          Work & Exp.
        </div>
        <div className="flex flex-col gap-y-6 md:gap-y-10">
          {/* CRPTM */}
          {<WorkTemplate profile={"Full-Stack Developer Intern"} org={"CRPTM"} Location={"Gurugram"} mode={"On-Site"} start={"Sep, 2024"} end={"Feb, 2025"}
          pointOne={"Resolved frontend and backend production bugs across core platform modules, improving application stability and user experience."}
          pointTwo={"Debugged and fixed authentication and integration issues related to Bibox and Gemini."}
          pointThree={"Implemented taxation logic and improved overall transaction processing based on business requirements for calculating taxations."}
          ></WorkTemplate>}
          {/* Aonflow Intern */}
          {<WorkTemplate profile={"Backend Engineer Intern"} org={"Aonflow"} Location={"Gurugram"} mode={"On-Site"} start={"Mar, 2025"} end={"Sep, 2025"}
          pointOne={"Built Odoo connector modules from scratch to handle bidirectional data flow and automated synchronization."}
          pointTwo={"Implemented sync reconciliation logic to detect and remove stale entities during refresh cycles, ensuring database consistency with external application data."}
          pointThree={"Monitored and optimized high-latency APIs across multiple workflows, reducing average response time by approximately 40% and improving overall platform performance."}
          ></WorkTemplate>}
          {/* Aonflow Backend Engineer */}
          {
            <WorkTemplate
              profile={"Backend Engineer"}
              org={"Aonflow"}
              Location={"Gurugram"}
              mode={"On-Site"}
              start={"Oct, 2025"}
              end={"Jan, 2026"}
              pointOne={
                "Developed and maintained Shopify connector integrations for fetching, processing, and synchronizing store data using GraphQL APIs."
              }
              pointTwo={
                "Built a web scraper to fetch and process QuickBooks entities, reducing metadata dependency usage and improving entity load times by 40%."
              }
              pointThree={
                "Optimized entity synchronization time by replacing nested iteration logic with hash-based lookups, reducing time complexity from O(n²) to O(n) and significantly improving performance."
              }
            ></WorkTemplate>
          }
        </div>
      </div>
    </div>
  );
};

{
  /* //Work Experince card */
}
const WorkTemplate = ({
  profile,
  org,
  Location,
  start,
  end,
  pointOne,
  pointTwo,
  pointThree,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="flex flex-row justify-center items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 0, scale: 0.5 }}
        whileTap={{ scale: 0.9 }}
        // whileHover={{ scale: 1.1 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, bounce: 0.4, type: "spring" }}
        className="flex shadow-xl flex-col justify-center w-full backdrop-blur-lg cursor-pointer md:w-3/4 border-r-2 border-b-2 border-l-2 border-t-2 rounded-b-xl rounded-t-xl border-slate-500 bg-slate-900 "
      >
        <div className="flex flex-row justify-between items-end">
          <div>
            <div className="text-xl md:text-4xl font-mono mt-4 md:mt-5 ml-4 md:ml-5  text-left font-bold text-fuchsia-400">
              {profile}
            </div>
            <div className="text-base md:text-2xl font-mono ml-4 md:ml-5 text-left font-semibold text-green-400 flex items-center space-x-1">
              <span>{org}</span>
              <span>&bull;</span>
              <span>{Location}</span>
            </div>
            <div className="block md:hidden lg:hidden  text-left ml-4 text-sm mx-2 font-mono font-semibold text-amber-400">
              {start} - {end}
            </div>
          </div>
          <div className="hidden md:block text-right mr-5 font-mono text-lg font-semibold text-amber-400">
            {start} - {end}
          </div>
        </div>
        <div className="mt-2 text-left lg:mt-5 px-4 font-mono font-medium text-sm md:text-xl text-slate-400 pb-3 tracking-wide md:tracking-wider">
          &bull;
          <span className="mr-2" />
          {pointOne}
          <br />
          &bull;
          <span className="mr-2" />
          {pointTwo}
          <br />
          &bull;
          <span className="mr-2" />
          {pointThree}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
