import { motion , AnimatePresence, useSpring, useScroll} from "framer-motion"


import './content.css'

const projects = [
    { 
        href: 'https://black-bears-brewery.com',
        src: require('../../images/bigLogo.jpg') 
    },
    { 
        href: 'https://primals.netlify.app/',
        src: require('../../images/primals.jpg')
    },
    { 
        href: 'https://jakals-of-azeroth.netlify.app/',
        src: require('../../images/jakals.jpg')  
    },
] 

const Content = () => {
    

    return (
        <section  id='projects' className='content-section'>
            <h3>Projects:</h3>
            <div className='projects'>
                
            </div>
        </section>
    )
}
export default Content