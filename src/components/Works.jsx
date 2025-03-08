import React, { Suspense } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.5)} className="h-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          disableAxis: window.innerWidth < 768, // Disable tilt on mobile
        }}
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] flex-grow min-h-[60px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>

      <Suspense fallback={<div className="text-center text-white">Loading projects...</div>}>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default SectionWrapper(Works, "");
