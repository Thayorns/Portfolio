import { Breadcrumb } from 'antd';

import './header.css'

const Header = () => {
    return (
        <section className='header-section'>
            <Breadcrumb className='navbar'
                tabIndex={0}
                items={[
                {
                    title: <a href="about">About</a>,
                },
                {
                    title: <a href="projects">Projects</a>,
                },
                {
                    title: <a href="contacts">Contacts</a>,
                }
                ]}
            />
            <div className='about-me'>
                <h1>Hey I'm Valentine</h1>
                <hr style={{borderColor: "#828585", width: '250px'}}></hr>
                <p>a frontend developer</p>
            </div>
        </section>
    )
}
export default Header