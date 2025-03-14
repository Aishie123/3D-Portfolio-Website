import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_links }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * (index % 3), 1.5)}
      initial={index < 3 ? "show" : "hidden"} // First row loads instantly, others fade in
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // Triggers animation row by row
      className="flex flex-col h-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Display multiple source links */}
            <div className="flex flex-row gap-2">
              {source_links && source_links.map((source, i) => (
                <div
                  key={`source-${i}`}
                  onClick={() => window.open(source.link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  title={source.name}
                >
                  <img src={source.icon} alt={source.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              ))}
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
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            The following projects showcase my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Works;