import { useInView  } from 'react-intersection-observer'
import './footer.css'

const Footer = () => {
    const { ref: footerParagrathTagRef, inView: footerParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: footerContactParagrathTagRef, inView: footerContactParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});

    const { ref: ulTagRef, inView: ulTagInView} = useInView({threshold: 0.3, triggerOnce: true});

    return (
        <section className='footer-section' id='contacts'>
            <p ref={footerParagrathTagRef} className={footerParagrathTagInView ? 'slide-in' : ''}>Usefull sources:</p>
            <ul ref={ulTagRef} className={ulTagInView ? 'slide-in' : ''} >
               <li>Ant Design</li>
               <li>Color Picker</li>
               <li>react anchor link smooth scroll</li>
               <li>react intersection observer</li>
            </ul>
            <p ref={footerContactParagrathTagRef} className={footerContactParagrathTagInView ? 'slide-in' : ''}>Contacts information:</p>
            <ul ref={ulTagRef} className={ulTagInView ? 'slide-in' : ''} >
               <li>https://github.com/Thayorns</li>
               <li>+7 921 325-22-50</li>
               <li>hh.ru link</li>
               <li>https://career.habr.com/vacancies?type=suitable </li>
            </ul>
        </section>
    )
}
export default Footer