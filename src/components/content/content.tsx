import { motion } from "framer-motion"
import React from "react"

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

interface PetProjects {
    src: any
    title: string
    description: string
    link: string
}
const projects = [
    
    {src: require('../../images/twitch-css-modifier.png'), title: 'Twitch No Overlay Extension', description: 'A browser extension that disables dimming and other UI elements in Twitch broadcasts.', link: 'https://github.com/Thayorns/twitch-css-modifier'},
    {src: require('../../images/creamkorzh.png'), title: 'Pastry Shop', description: 'An open source project for automating business processes of a bakery and pastry shop.', link: 'https://github.com/Thayorns/pastry-shop'},
    {src: require('../../images/games-query.jpg'), title: 'Games Lib', description: 'The React app receives data via an external API, displays it in a table with the ability to filter by category. Limit - 50 games.',link: 'https://games-query.netlify.app/'},
    {src: require('../../images/rtk-query.png'), title: 'API Requests', description: 'React app gets data from jsonplaceholder with next batch of data loading on click. Routing with dom 6 router implemented.',link: 'https://rtkquery-fsd-rrd6.netlify.app/'},
    {src: require('../../images/smallLogo.png'), title: 'Black Bears brewery', description: 'The calling card of the "Black Bears" brewery. There is no such thing as too much beer...',link: 'https://black-bears-brewery.netlify.app/'},
    {src: require('../../images/primals.jpg'), title: 'Primals', description: 'A small React app that shows whether a number/digit entered into a field is prime.',link: 'https://primals.netlify.app/'},
]

const Content = () => {
    return (
        <section  id='projects' className='content-section'>
            <motion.div className='projects'>
            <h3>What have I implemented?</h3>
                {
                    projects.map((project: PetProjects,index: number) => {
                        return (
                            <motion.div className="project-container" key={index} variants={projectVariants}
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