import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { workExperiences, educationExperiences, volunteeringExperiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name || experience.school_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title || experience.degree}
        </h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name || experience.school_name}
        </p>
        {experience.location && (
          <p className='text-secondary text-[14px]' style={{ margin: 0 }}>
            {experience.location}
          </p>
        )}
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points && experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
        {experience.achievements && experience.achievements.map((achievement, index) => (
          <li
            key={`education-achievement-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {achievement}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};



const buttonGroupVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState("work");

  const renderTimeline = () => {
    switch (selectedTab) {
      case "education":
        return educationExperiences;
      case "volunteering":
        return volunteeringExperiences;
      case "work":
      default:
        return workExperiences;
    }
  };

  return (
    <>
      <motion.div variants={textVariant()} animate="visible">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {selectedTab === "work"
            ? "Work Experience"
            : selectedTab === "education"
            ? "Educational Attainment"
            : "Other Affiliations"}
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-col items-center">
        <motion.div
          className="mb-10"
          variants={buttonGroupVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <ButtonGroup
            variant="outlined"
            aria-label="Experience type"
            sx={{
              "& .MuiButton-root": {
                borderColor: "#FFFFFF", // Button border color
                fontFamily: "'Poppins', sans-serif", // Ensure font matches
              },
              "& .MuiButtonGroup-grouped:not(:first-of-type)": {
                borderColor: "#FFFFFF", // Line between buttons
              },
              "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                borderRight: `2px solid #FFFFFF`, // Line between buttons
              },
            }}
          >
            <Button
              onClick={() => setSelectedTab("work")}
              sx={{ color: selectedTab === "work" ? "#915EFF" : "inherit", borderColor: selectedTab === "work" ? "#915EFF" : "inherit" }}
            >
              Work
            </Button>
            <Button
              onClick={() => setSelectedTab("education")}
              sx={{ color: selectedTab === "education" ? "#915EFF" : "inherit", borderColor: selectedTab === "education" ? "#915EFF" : "inherit" }}
            >
              Education
            </Button>
            <Button
              onClick={() => setSelectedTab("volunteering")}
              sx={{ color: selectedTab === "volunteering" ? "#915EFF" : "inherit", borderColor: selectedTab === "volunteering" ? "#915EFF" : "inherit" }}
            >
              Other
            </Button>
          </ButtonGroup>
        </motion.div>

        <VerticalTimeline>
          {renderTimeline().map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
