import { FloatButton, Descriptions  } from 'antd';
import { GithubOutlined} from '@ant-design/icons';

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
      children: 
        <a href='https://github.com/Thayorns'
          target='_blank'
          rel="noopener noreferrer">
          <GithubOutlined className='gitHub-icon'/>
        </a>,
    },
    {
      key: '5',
      children: 
        <a href='https://hh.ru/resume/acb11d21ff05b3f52e0039ed1f677658354a48'
          target='_blank'
          rel="noopener noreferrer">
          <img className='gitHub-icon' alt=''
            src={require('../../images/HeadHunter_logo.png')}/>
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
          <h2>Contacts information:</h2>
          <Descriptions layout="vertical" items={items} />
          <FloatButton.BackTop/>
        </section>
    )
}
export default Footer