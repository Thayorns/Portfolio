import { Breadcrumb, Avatar, Dropdown, Card } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useInView } from 'react-intersection-observer'
// import  { useState } from 'react'

import './header.css'

const Header = () => {
    const { ref, inView, entry } = useInView({threshold: 1,})
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
                
                <div className='hobbies-cards' ref={ref} inView={inView}>
                    <Card hoverable 
                        cover={
                            <img alt="my airsoft hobby" 
                                src={require('../../images/airsoft-hobby.jpg')} 
                            />
                        }
                    >
                        <Meta title="Airsoft" description="fun military simulator" />
                    </Card>
                    
                    <Card hoverable style={{width: '380px'}}
                        cover={
                            <img alt="gaming with my friends" style={{}}
                                src={require('../../images/gaming.jpg')} 
                            />
                        }
                    >
                        <Meta title="Gaming" description="especially with my friends" />
                    </Card>
                    
                    <Card hoverable style={{width: '380px'}}
                        cover={
                            <img alt="Planes" src={require('../../images/planes.jpg')}/>
                        }
                    >
                        <Meta title="planes" description="learning to fly" />
                    </Card>
                </div>
             </div>
        </section>
    )
}
export default Header