import { motion } from "framer-motion"

import './info.css'
const liVariants = {
    offscreen: {
      y: 400,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
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
const infoImages = imageLinks.map(img => {
    return <motion.img className='info-icons-img' 
        src={img} 
        alt=''
        whileTap={styles.whileTap}
        transition={styles.transition}
    />
})

const lItem = [
    'Continually learning new things',
    'Seeking mastery in each line of code',
    'Adore my craft, finding joy and satisfaction in every problem solved',
    'Vowing to dedicate my life to development',
    'Relentlessly pursue knowledge',
    'Turning complexity into simplicity with love and expertise'
]
const uL = lItem.map(li => {
    return  (
        <motion.div initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}>
            <motion.li variants={liVariants} className='info-text-list-item'>
                <img className='done-icon' src={require('../../images/done-icon.png')} alt=''/>
                {li}
            </motion.li>
        </motion.div>
    )
})
const Info = () => {
    return (
        <section className='info-section'>
            <div className='info-icons'>
                {infoImages}
            </div>
            <div className='info-text'>
                {uL}
            </div>
        </section>
    )
}
export default Info