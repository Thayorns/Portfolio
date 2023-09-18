import { useInView  } from 'react-intersection-observer'
import { FloatButton } from 'antd';


import './footer.css'

const Footer = () => {
    const { ref: footerParagrathTagRef, inView: footerParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: footerContactParagrathTagRef, inView: footerContactParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});

    const { ref: ulTagRef, inView: ulTagInView} = useInView({threshold: 0.3, triggerOnce: true});

    return (
        <section className='footer-section' id='contacts'>
            <p ref={footerParagrathTagRef} className={footerParagrathTagInView ? 'slide-in' : ''}>Usefull sources:</p>
            <ul ref={ulTagRef} className={ulTagInView ? 'slide-in' : ''} >
               <li><a href='a'>Ant Design</a></li>
               <li><a href='a'>Color Picker</a></li>
               <li><a href='a'>react anchor link smooth scroll</a></li>
               <li><a href='a'>react intersection observer</a></li>
            </ul>
            <p ref={footerContactParagrathTagRef} className={footerContactParagrathTagInView ? 'slide-in' : ''}>Contacts information:</p>
            <ul ref={ulTagRef} className={ulTagInView ? 'slide-in' : ''} >
               <li><a href='a'>https://github.com/Thayorns</a></li>
               <li><a href='a'>+7 921 325-22-50</a></li>
               <li><a href='a'>hh.ru link</a></li>
               <li><a href='a'>https://career.habr.com/vacancies?type=suitable</a></li>
            </ul>
            <FloatButton.BackTop/>
        </section>
    )
}
export default Footer