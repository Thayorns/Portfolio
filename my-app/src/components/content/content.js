import { motion } from "framer-motion"

import './content.css'

const projects = [
    [
        // <a href="https://black-bears-brewery.com" target="_blank"rel="noreferrer">
            <img style={{height: '210px'}} src={require('../../images/bigLogo.jpg')}alt=""/>,
            <h4>Citra Dream</h4>,
            <span>american pale ale</span>,
        {/* </a>  */}
    ],
    [
        // <a href="https://primals.netlify.app/" target="_blank"rel="noreferrer">
            <img src={require('../../images/primals.jpg')}alt=""/>,
            <h4>Citra Dream</h4>,
            <span>american pale ale</span>,
        {/* </a>  */}
    ],
    [
        // <a href="https://jakals-of-azeroth.netlify.app/" target="_blank"rel="noreferrer">
            <img src={require('../../images/jakals.jpg')}alt=""/>,
            <h4>Citra Dream</h4>,
            <span>american pale ale</span>,
        {/* </a>  */}
    ],
  ]


const Content = () => {
    

    return (
        <section  id='projects' className='content-section'>
            <div className='projects'>
                
            </div>
        </section>
    )
}
export default Content