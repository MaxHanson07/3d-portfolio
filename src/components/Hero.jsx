import React from "react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className="absolute left-1/4 right-1/2 bg-gradient-to-r from-[#050d0f] to-[#344e4f] bottom-20 top-20 h-5/6">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-opacity-85 bg-gradient-to-t from-[#050d0f] to-transparent"></div>
      </div>
      <div className="absolute left-1/2 right-1/4 bg-gradient-to-r from-[#344e4f] to-[#050d0f] top-20 h-5/6">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-opacity-85 bg-gradient-to-t from-[#050d0f] to-transparent"></div>
      </div>
      <div className="absolute top-20 left-0 w-full h-4 bg-opacity-15 bg-gradient-to-b from-[#050d0f] to-transparent"></div>

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c1d8ec]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#F5F5F5]`}>
            Hi, I'm <span className="text-[#9bbfdf]">Max</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#dce8f3]`}>
            I develop web applications, <br></br> IOT Projects, and 3D visuals. <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute x:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
