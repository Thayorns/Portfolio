import { FloatButton, Descriptions  } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

import './footer.css'
const items = [
    {
      key: '1',
      label: 'Owner',
      children: 'Valentine Frolov',
    },
    {
      key: '2',
      label: 'Telephone',
      children: '8(921)3252250',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Saint-Petersburg, Russia',
    },
    {
      key: '4',
      children: <a href='https://github.com/Thayorns'
                    target='_blank'
                    rel="noopener noreferrer">
                    <GithubOutlined className='gitHub-icon'/>
                </a>,
    },
    {
      key: '5',
      children: <a href='https://career.habr.com/thayorn'
                    target='_blank'
                    rel="noopener noreferrer">
                    <LinkedinOutlined className='gitHub-icon'/>
                </a>,
    },
  ];

const Footer = () => {
    return (
        <section className='footer-section' id='contacts'>
          <h2>Contacts information:</h2>
          <Descriptions layout="vertical" items={items} />
          <FloatButton.BackTop/>
        </section>
    )
}
export default Footer