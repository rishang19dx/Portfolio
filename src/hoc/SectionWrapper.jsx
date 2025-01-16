import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => 
function HOC(){
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            animate='visible'
            viewport={{once: true, amount: 0.3}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper