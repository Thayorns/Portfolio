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
    {src: require('../../images/creamkorzh.png'), title: 'КРЕМ и КОРЖ', description: 'Приложение для пекарни-кондитерской. Учёт подарочных кофе по qr-коду, регистрация/авторизация по почте, уведомления и корзина для заказов тортов.', link: 'https://creamkorzh.ru/'},
    {src: require('../../images/games-query.jpg'), title: 'Игровая библиотека', description: 'React приложение получает данные по внешнему API, рендерит в таблицу с возможностью фильтра по категориям. ограничение - 50 игр.',link: 'https://games-query.netlify.app/'},
    {src: require('../../images/rtk-query.png'), title: 'Запросы к API', description: 'React приложение получает данные из jsonplaceholder с подгрузкой следующей партии данных по клику. Реализован роутинг с router dom 6.',link: 'https://rtkquery-fsd-rrd6.netlify.app/'},
    {src: require('../../images/smallLogo.png'), title: 'Black Bears brewery', description: 'Визитная карточка пивоварни "Black Bears Brewery". Много пива не бывает..',link: 'https://black-bears-brewery.netlify.app/'},
    {src: require('../../images/primals.jpg'), title: 'Простые числа', description: 'Небольшое реакт-приложение. Показывает, является ли введённое в поле число/цифра простым.',link: 'https://primals.netlify.app/'},
    // {src: require('../../images/fetch-data.png'), title: 'Fetch данных', description: "Простое SPA с моей первой fetch-функцией!",link: 'https://fetch-data-onclick.netlify.app/'},
    // {src: require('../../images/jakals.jpg'), title: 'Шакалы Азерота', description: 'Это самый первый проект, посвящённый моим друзьям в игре World of Warcraft.',link: 'https://jakals-of-azeroth.netlify.app/'},
]

const Content = () => {
    return (
        <section  id='projects' className='content-section'>
            <motion.div className='projects'>
            <h3>Что реализовал?</h3>
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