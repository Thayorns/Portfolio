import { motion } from "framer-motion"

import './content.css'
const projectVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
    }
}


const projects = [
    {src: require('../../images/smallLogo.png'), title: 'Black Bears brewery', description: 'Here is my first freelance project. There is no such thing as too much beer, you know..',link: 'https://black-bears-brewery.com/'},
    {src: require('../../images/primals.jpg'), title: 'Primals', description: 'This app allows you to find out if your typed number is prime or not',link: 'https://primals.netlify.app/'},
    {src: require('../../images/fetch-data.png'), title: 'Fetch data', description: "This SPA is fetching data from the external link and renders json data as info blocks",link: 'https://fetch-data-onclick.netlify.app/'},
    {src: require('../../images/jakals.jpg'), title: 'Jakals of Azeroth', description: 'This is my very 1st SPA dedicated to the gaming community',link: 'https://jakals-of-azeroth.netlify.app/'},
]

const Content = () => {
    return (
        <section  id='projects' className='content-section'>
            <motion.div className='projects'>
                {
                    projects.map(project => {
                        return (
                            <motion.div className="project-container" key={project} variants={projectVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.4 }}>
                                <a className="project-link-container"rel="noreferrer" href={project.link} target='_blank'>
                                    <img className="project-img" alt="" src={project.src}/>
                                </a>
                                
                                <div className="project-info-container">
                                    <h2>{project.title}</h2>
                                    <span>{project.description}</span>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </section>
    )
}
export default Content