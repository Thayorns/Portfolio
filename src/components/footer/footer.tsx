import { FloatButton, Descriptions  } from 'antd';
import { GithubOutlined} from '@ant-design/icons';
import React from 'react';

import './footer.css'
const items = [
    {
      key: '1',
      label: 'владелец',
      children: 'Фролов Валентин',
    },
    {
      key: '2',
      label: 'телефон',
      children: '8(921)3252250',
    },
    {
      key: '3',
      label: 'место жительства',
      children: 'Санкт-Петербург, Россия',
    },
    {
      key: '4',
      children: 
        <a href='https://github.com/Thayorns'
          target='_blank'
          rel="noopener noreferrer">
          <GithubOutlined className='gitHub-icon'/>
        </a>,
    },
    {
      key: '6',
      children: 
        <a href='https://web.telegram.org/k/#@thayorn'
          target='_blank'
          rel="noopener noreferrer">
          <img className='gitHub-icon' alt=''
            src={require('../../images/telegram.png')}/>
        </a>,
    },
  ];

const Footer = () => {
    return (
        <section className='footer-section' id='contacts'>
          <h2>Контакты:</h2>
          <Descriptions layout="vertical" items={items} />
          <FloatButton.BackTop/>
        </section>
    )
}
export default Footer