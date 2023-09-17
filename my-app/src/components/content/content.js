import { useInView  } from 'react-intersection-observer'
import { Card } from 'antd';

import './content.css'

const Content = () => {
    const { Meta } = Card;
    const { ref: projectsH3TagRef, inView: projectsH3TagInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: jakalsAppRef, inView: jakalsAppInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: primalsAppRef, inView: primalsAppInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: calculatorAppRef, inView: calculatorAppInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: leastCommonMultipleAppRef, inView: leastCommonMultipleAppInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: fifthAppRef, inView: fifthAppInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: sixthAppRef, inView: sixthAppInView} = useInView({threshold: 0.3, triggerOnce: true});

    return (
        <section  id='projects' className='content-section'>
            <h3 ref={projectsH3TagRef} className={projectsH3TagInView ? 'slide-in' : ''}>Projects:</h3>
            <div className='projects'>
                <Card ref={jakalsAppRef} hoverable className={jakalsAppInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="jakals-app" 
                            src={require('../../images/jakals.jpg')} 
                        />
                    }
                >
                    <Meta title="Jakals of Azeroth" description="game community app" />
                </Card>
                <Card ref={primalsAppRef} hoverable className={primalsAppInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="find primals app" 
                            src={require('../../images/primals.jpg')} 
                        />
                    }
                >
                    <Meta title="Primals" description="In mathematics, the sieve of Eratosthenes is an ancient algorithm .." />
                </Card>
                <Card ref={calculatorAppRef} hoverable className={calculatorAppInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="calculator-app" 
                            src={require('../../images/calculator.jpg')} 
                        />
                    }
                >
                    <Meta title="Calculator" description="we all know it is absolutely necessary" />
                </Card>
                <Card ref={leastCommonMultipleAppRef} hoverable className={leastCommonMultipleAppInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="Least-Common-Multiples" 
                            src={require('../../images/Least-Common-Multiples.jpg')} 
                        />
                    }
                >
                    <Meta title="Least Common Multiples" description="the lowest common multiple of two integers 'a' and 'b',that is divisible by both" />
                </Card>
                <Card ref={fifthAppRef} hoverable className={fifthAppInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="fifth app" 
                            src={require('../../images/5.jpg')} 
                        />
                    }
                >
                    <Meta title="the fifth something" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nihil" />
                </Card>
                <Card ref={sixthAppRef} hoverable className={sixthAppInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="sixth app" 
                            src={require('../../images/6.jpg')} 
                        />
                    }
                >
                    <Meta title="the sixth something" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nihil" />
                </Card>
            </div>
        </section>
    )
}
export default Content