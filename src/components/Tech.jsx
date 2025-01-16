import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion';

const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[15px] py-3 px-6 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain"
          />
          <h3 className="text-white text-lg font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {technologies.map((technology, index) => (
        <TechCard
          key={technology.name}
          index={index}
          title={technology.name}
          icon={technology.icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
