import { Breadcrumb, Avatar } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion , AnimatePresence, useSpring, useScroll} from "framer-motion"
import { useState, useEffect } from 'react'
import React from 'react'

import './header.css'
const TypingEffect = () => {
    const text = 'a js developer and open source contributor.'
    const [currentText, setCurrentText] = useState('')
   const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const intervalId = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[index]);
                setIndex(index + 1);
            }, 80);
            
            return () => clearTimeout(intervalId);
        }
    }, [index, text]);
    
    return <p>{currentText}<span className="cursor">|</span></p>
}

type ToggleParams = {
    toggleOpen: () => void
    isOpen: boolean
}
const Header = ({toggleOpen, isOpen}: ToggleParams) => {
   
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      });
    
      const avatar = 
        <motion.img whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }} src={require('../../images/avatar.jpg')}  alt="avatar"
        />
    const breadcrumbLinks = [
        {title: <AnchorLink offset={() => 100} href="#stack">Stack</AnchorLink>},
        {title: <AnchorLink offset={() => 100} href="#projects">Projects</AnchorLink>},
        {title: <AnchorLink offset={() => 100} href="#contacts">Contacts</AnchorLink>},
    ]
    // Burger-menu items:
    const items = [
        {label: <AnchorLink href="#stack">Stack</AnchorLink>, key: '0',},
        {label: <AnchorLink href="#projects">Projects</AnchorLink>, key: '1',},
        {label: <AnchorLink href="#contacts">Contacts</AnchorLink>, key: '2',}
    ]

    

    return (
        <section className='header-section'>
            
            <motion.nav className="navbar" style={{zIndex: 3}}>
                <Avatar size={60} icon={avatar}/>
                <button className="burger-button" onClick={toggleOpen}>
                    <motion.span
                        className="burger-line"
                        initial={{ rotate: 0, y: 0 }}
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 15 : 0  }}
                    ></motion.span>
                    <motion.span
                        className="burger-line"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isOpen ? 0 : 1 }}
                    ></motion.span>
                    <motion.span
                        className="burger-line"
                        initial={{ rotate: 0, y: 0 }}
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -15 : 0  }}
                    ></motion.span>
                </button>

                <Breadcrumb items = {breadcrumbLinks}/>
                
            </motion.nav>
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div className="burger-content"
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -500, 
                            transition: { delay: 0.05,
                            type: "spring"
                            }
                        }}
                    >
                        {items.map((item, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0, transition:{duration: 0.4, delay: index * 0.1 }}}
                                exit={{ opacity: 0, x: -100 }}
                                className="menu-item"
                                onClick={() => {
                                        toggleOpen()
                                    }
                                }
                            >
                            <motion.div >
                                {item.label}
                            </motion.div>
                            
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className='about-me'>
                <h1>Hi! I'm Valentine</h1>
                <hr style={{borderColor: "#828585", width: '250px'}}></hr>

                <TypingEffect/>
            </div>   
        </section>
    )
}
export default Header