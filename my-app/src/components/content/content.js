import { motion } from "framer-motion"

import './content.css'
const projects = [
    {src: require('../../images/bigLogo.jpg'), title: 'Black Bears brewery', description: 'description',link: 'https://black-bears-brewery.com/'},
    {src: require('../../images/primals.jpg'), title: 'Primals', description: 'description',link: 'https://primals.netlify.app/'},
    {src: require('../../images/jakals.jpg'), title: 'Jakals of Azeroth', description: 'description',link: 'https://jakals-of-azeroth.netlify.app/'},
]
const projectsComponent = projects.map(project => {
    return (
        <motion.div className="project-container">
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



const Content = () => {
    

    return (
        <section  id='projects' className='content-section'>
            <div className='projects'>
                {projectsComponent}
            </div>
        </section>
    )
}
export default Content