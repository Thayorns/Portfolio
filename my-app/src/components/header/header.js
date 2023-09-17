import { Breadcrumb, Avatar, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'


import './header.css'

const Header = () => {
  
    const avatar = <img src={require('../../images/avatar.jpg')} alt='avatar'/>
    const breadcrumbLinks = [
        {title: <AnchorLink offset={() => 100} href="#about">About Me</AnchorLink>},
        {title: <AnchorLink offset={() => 100} href="#projects">Projects</AnchorLink>},
        {title: <AnchorLink offset={() => 100} href="#contacts">Contacts</AnchorLink>}
    ]
    // Burger-menu items:
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
            <div className='about-me'>
                <h1>Hey! I'm Valentine</h1>
                <hr style={{borderColor: "#828585", width: '250px'}}></hr>
                <p>a frontend developer</p>
                <span>and this is the case when 'coding' === 'my passion' // true</span>
            </div>   
        </section>
    )
}
export default Header