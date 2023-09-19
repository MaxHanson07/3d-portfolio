import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  tagline,
  context,
  bullets,
  tags,
  image,
  source_code_link,
}) => {
  return (
<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  <div className="flex md:flex-row flex-col w-full">
    <div className="sm:mb-5 relative">
      <div className=" p-5 rounded-2xl sm:w-[480px] bg-[#8989890f] w-full md:mr-4">
        <div className="mt-8">
          <h3 className="text-[#ffffff] text-[20px] pb-5">{name}</h3>
          <em className="text-white text-[28px] font-bold pb-5 leading-[30px]">
            {tagline}
          </em>
          <p className="text-[#ffffff] pt-5 text-[18px] leading-[30px]">
            {context}
          </p>
        </div>

        <div>
          {bullets && (
            <ul className="list-disc ml-5 mt-2 text-white font-bold text-[18px] leading-[30px]">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))} </div>
      </div>
      <div className="absolute top-2 right-4 m-2 card-img_hover">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>

    <div className="w-full h-auto sm:mt-5 md:w-auto mb-5 md:mt-0 flex items-center justify-center rounded-2xl">
      <img
        src={image}
        alt="project_image"
        className="w-full h-auto object-contain rounded-2xl"
      />
    </div>
  </div>
</motion.div>

  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My projects</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
