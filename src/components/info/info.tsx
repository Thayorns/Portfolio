import { motion } from "framer-motion"
import React from 'react'

import './info.css'
const liVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
    }
}
const styles = {
    whileTap: {scale: 0.8},
    transition: {
        type: "spring",
        stiffness: 260,
        damping: 20 
    }
}
const imageLinks = [
    require('../../images/happy-programmer.png'),
    require('../../images/js-laptop-icon.png')
]
const lItem = [
    "Helping people automate processes",
    "Mastery and clean code",
    "Self-realization",
    "Professional growth",
    "Teamwork",
]
const techList = [
    'React + Router Dom 6',
    'Next.js',
    'Redux + RTK Query',
    'Node.js + Express',
    'PostgreSQL',
    'Websocket',
    'Nginx',
    'Docker',
    'Typescript',
    'Ant Design',
    'Tailwind',
    'Framer Motion',
]
const Info = () => {
    return (
        <section className='info-section'>
            <div className='info-icons'>
                
                {imageLinks.map(img => 
        
                    (<motion.img className='info-icons-img'
                        key={img} 
                        src={img} 
                        alt=''
                        whileTap={styles.whileTap}
                        transition={styles.transition}
                    />)
                    
                )}
                
            </div>
            <div className='info-text'>
                <h3>What are the goals?</h3>
                {lItem.map(li => 
                    (
                        <motion.div className="info-text-list-item-container"
                        key={li}
                        whileHover={{ scale: 1.1 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        >
                            <motion.li variants={liVariants} 
                                className='info-text-list-item'>
                                <img className='done-icon' src={require('../../images/done-icon.png')} alt=''/>
                                {li} 
                            </motion.li>
                        </motion.div>
                    )
                )}
                <h3 id="stack">My tech stack</h3>
                {techList.map(li => 
                    (
                        <motion.div className="info-text-list-item-container"
                            key={li}
                            whileHover={{ scale: 1.1 }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <motion.li variants={liVariants} 
                                className='info-text-list-item'>
                                <img className='done-icon' src={require('../../images/done-icon.png')} alt=''/>
                                {li} 
                            </motion.li>
                        </motion.div>
                    )
                )}
            </div>
        </section>
    )
}
export default Info