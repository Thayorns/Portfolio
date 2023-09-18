import { useInView  } from 'react-intersection-observer'
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
    const { ref: footerParagrathTagRef, inView: footerParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: footerContactParagrathTagRef, inView: footerContactParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: descriptionsRef, inView: descriptionsInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: ulTagRef, inView: ulTagInView} = useInView({threshold: 0.3, triggerOnce: true});

    return (
        <section className='footer-section' id='contacts'>
            <p ref={footerParagrathTagRef} className={footerParagrathTagInView ? 'slide-in' : ''}>Usefull sources for beginners:</p>
            <ul ref={ulTagRef} className={ulTagInView ? 'slide-in' : ''} >
                <li><a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' rel="noopener noreferrer" target='_blank'>freecodecamp</a></li>
                <li><a href='https://developer.mozilla.org/en-US/' rel="noopener noreferrer" target='_blank'>MDN Web Docs</a></li>
                <li><a href='https://app.netlify.com/' rel="noopener noreferrer" target='_blank'>Netlify</a></li>
                <li><a href='https://ant.design/' rel="noopener noreferrer" target='_blank'>Ant Design</a></li>
                <li><a href='https://imagecolorpicker.com/' rel="noopener noreferrer" target='_blank'>Color Picker</a></li>
                <li><a href='https://www.npmjs.com/package/react-anchor-link-smooth-scroll' rel="noopener noreferrer" target='_blank'>npm react-anchor-link-smooth-scroll</a></li>
                <li><a href='https://www.npmjs.com/package/react-intersection-observer' rel="noopener noreferrer" target='_blank'>npm react-intersection-observer</a></li>
            </ul>
            <p ref={footerContactParagrathTagRef} className={footerContactParagrathTagInView ? 'slide-in' : ''}>Contacts information:</p>
            <Descriptions ref={descriptionsRef} layout="vertical" items={items} className={descriptionsInView ? 'slide-in' : ''}/>
            <FloatButton.BackTop/>
        </section>
    )
}
export default Footer