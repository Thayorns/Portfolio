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
    'Continually learning new things',
    'Seeking mastery in each line of code',
    'Adore my craft, finding joy and satisfaction in every problem solved',
    'Vowing to dedicate my life to development',
    'Relentlessly pursue knowledge',
    'Turning complexity into simplicity with love and expertise'
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
                
            </div>
        </section>
    )
}
export default Info