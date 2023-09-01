import { Breadcrumb } from 'antd';

import './header.css'

const Header = () => {
    return (
        <section className='header-section'>
            <nav>
                <Breadcrumb className='navbar'
                    tabIndex={0}
                    items={[
                    {
                        title: 'About',
                    },
                    {
                        title: 'Projects',
                    },
                    {
                        title: 'Contacts',
                    }
                    ]}
                />
            </nav>
            <div>
                and here - header section
            </div>
        </section>
    )
}
export default Header