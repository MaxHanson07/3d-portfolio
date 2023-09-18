import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon, website }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#050d0f] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-50 h-16 object-contain'
        />

        <h3 onClick={() => window.open(website, "_blank")}
        className='text-white text-[20px] font-bold text-center cursor-pointer hover:text-secondary'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.sectionHeadText}>
        Education.
      </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary -text-[17px] max-w-3xl text-[16px] leading-[30px]">
      I earned my Bachelor of Science in Computer Science from George Fox University, graduating Cum Laude while also being a
      member of the Honors Program. Over the past four years, I've had the opportunity to work on various exciting coding projects,
      including full-stack applications, analytics models, and Arduino projects.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
      </>
  )
}

export default SectionWrapper(About, "about")