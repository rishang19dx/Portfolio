import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { robotics_technologies, web_technologies } from '../constants';
import { fadeIn } from '../utils/motion';

const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[120px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[10px] py-2 px-4 min-h-[120px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain"
          />
          <h3 className="text-white text-sm font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Web Technologies
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {web_technologies.map((technology, index) => (
            <TechCard
              key={technology.name}
              index={index}
              title={technology.name}
              icon={technology.icon}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Robotics Technologies
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {robotics_technologies.map((technology, index) => (
            <TechCard
              key={technology.name}
              index={index}
              title={technology.name}
              icon={technology.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);
