import { Breadcrumb, Avatar, Dropdown, Card } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useInView } from 'react-intersection-observer'
// import  { useState } from 'react'

import './header.css'

const Header = () => {
    const { ref, inView, entry } = useInView({threshold: 0.85,})
    const { Meta } = Card;
    const avatar = <img src={require('../../images/avatar.jpg')} alt='avatar'/>
    
    const breadcrumbLinks = [
        {title: <AnchorLink offset={() => 100} href="#about">About Me</AnchorLink>},
        {title: <AnchorLink offset={() => 100} href="#projects">Projects</AnchorLink>},
        {title: <AnchorLink offset={() => 100} href="#contacts">Contacts</AnchorLink>}
    ]
    const items = [
        {label: <AnchorLink href="#about">About Me</AnchorLink>, key: '0',},
        {label: <AnchorLink href="#projects">Projects</AnchorLink>, key: '1',},
        {label: <AnchorLink href="#contacts">Contacts</AnchorLink>,key: '2',}
    ]


    return (
        <section className='header-section'>
            <nav className='navbar' style={{zIndex: 1}}>
                <Avatar size={60} icon={avatar}/>
                
                <Dropdown menu={{ items }} trigger={['click']}>
                    <MenuOutlined onClick={(e) => e.preventDefault()} /> 
                </Dropdown>
                
                <Breadcrumb tabIndex={0} items = {breadcrumbLinks}/>
            </nav>
            <div className='about-me' id='about'>
                <h1>Hey! I'm Valentine</h1>
                <hr style={{borderColor: "#828585", width: '250px'}}></hr>
                <p>a frontend developer</p>
                <span>and this is the case when 'coding' === 'my passion' // true</span>
            </div>
            <div className='hobbyes'>
                By the way, i find myself in an active life position so these are my hobbies:
                
                <div className='hobbies-cards' ref={ref}>
                   {/* ------------------------------------------------------------------ */}
                    <div>
                        <Card hoverable 
                            cover={
                                <img alt="my airsoft hobby" 
                                    src={require('../../images/airsoft-hobby.jpg')} 
                                />
                            }
                        >
                            <Meta title="Airsoft" description="fun military simulator" />
                        </Card>
                        <Card hoverable 
                            cover={
                                <img alt="my airsoft hobby" 
                                    src={require('../../images/dreamteam.jpg')} 
                                />
                            }
                        >
                            <Meta title="Jakals & MSOT 4112" description="The most powerful thing in airsoft is to cooperate with others" />
                        </Card>
                    </div>
                    <hr style={{borderColor: "#828585", width: '250px'}}></hr>  
                    {/* ------------------------------------------------------------------ */}
                    <div>    
                        <Card hoverable 
                            cover={
                                <img alt="gaming with my friends"
                                    src={require('../../images/gaming.jpg')} 
                                />
                            }
                        >
                            <Meta title="Gaming.." description="especially with my friends" />
                        </Card>
                        <Card hoverable 
                            cover={
                                <img alt="gaming with my friends"
                                    src={require('../../images/team-screenshot.jpg')} 
                                />
                            }
                        >
                            <Meta title="'Jakals of Azeroth'" description="By the way, my very 1st pet-project was dedicated to our game-community.The precious moments..." />
                        </Card>
                    </div>
                    {/* ------------------------------------------------------------------ */}
                    <hr style={{borderColor: "#828585", width: '250px'}}></hr>
                    <div>    
                        <Card hoverable 
                            cover={
                                <img alt="Planes" src={require('../../images/planes.jpg')}/>
                            }
                        >
                            <Meta title="planes" description="learning to fly" />
                        </Card>

                        <Card hoverable 
                            cover={
                                <img alt="Planes" src={require('../../images/plane.jpg')}/>
                            }
                        >
                            <Meta title="Piper PA" description="This one is my favourite model. It was love at first sight and i don't want any other" />
                        </Card>
                    </div>
                </div>
             </div>
        </section>
    )
}
export default Header