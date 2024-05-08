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
    
    {src: require('../../images/games-query.jpg'), title: 'Игровая библиотека', description: 'React SPA с использованием RTK query, FSD методологии && react router dom 6, более расширенная версия с большим функционалом.',link: 'https://games-query.netlify.app/'},
    {src: require('../../images/rtk-query.png'), title: 'RTK query', description: 'React SPA с использованием RTK query, FSD методологии && react router dom 6.',link: 'https://rtkquery-fsd-rrd6.netlify.app/'},
    {src: require('../../images/smallLogo.png'), title: 'Black Bears brewery', description: 'Это мой первый фриланс-проект. Никогда не бывает много пива..',link: 'https://black-bears-brewery.com/'},
    {src: require('../../images/primals.jpg'), title: 'Простые числа', description: 'SPA приложение показывает, является ли введённое в поле число/цифра - простым. ',link: 'https://primals.netlify.app/'},
    {src: require('../../images/fetch-data.png'), title: 'Fetch данных', description: "Простое SPA с моей первой fetch-функцией!",link: 'https://fetch-data-onclick.netlify.app/'},
    {src: require('../../images/jakals.jpg'), title: 'Шакалы Азерота', description: 'Это самый первый проект, посвящённый моим друзьям в игре World of Warcraft.',link: 'https://jakals-of-azeroth.netlify.app/'},
]

const Content = () => {
    return (
        <section  id='projects' className='content-section'>
            <motion.div className='projects'>
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