import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#56ccf2]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#F5F5F5]`}>
            Hi, I'm <span className="blue-text-gradient">Max</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#dce8f3]`}>
            Computer Scientist. <br></br> Software Developer.{" "}
            <br className="sm:block hidden" />
          </p>

          
        </div>
        
      </div>
      {/* <ComputersCanvas /> */}

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
