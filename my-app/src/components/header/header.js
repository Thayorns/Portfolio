import { Breadcrumb, Avatar, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './header.css'

const Header = ({ menuActive,setMenuActive }) => {
    const avatar = <img src={require('../../images/avatar.jpg')} alt='avatar'/>
    const breadcrumbLinks = [
        {title: <a href="about">About</a>},
        {title: <a href="projects">Projects</a>},
        {title: <a href="contacts">Contacts</a>}
    ]

    return (
        <section className='header-section'>
            <nav className='navbar'>
                <Avatar size={60} icon={avatar}/>
                
                {/* <Dropdown menu={breadcrumbLinks} trigger={['click']}>
                    
                        <MenuOutlined onClick={(e) => e.preventDefault()}/>
                </Dropdown> */}
                
                <MenuOutlined onClick={(e) => e.preventDefault()}/>
                
                <Breadcrumb tabIndex={0} items = {breadcrumbLinks}/>
            </nav>
            <div className='about-me'>
                <h1>Hey I'm Valentine</h1>
                <hr style={{borderColor: "#828585", width: '250px'}}></hr>
                <p>a frontend developer</p>
            </div>
        </section>
    )
}
export default Header