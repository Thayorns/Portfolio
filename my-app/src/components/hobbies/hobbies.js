import { useInView  } from 'react-intersection-observer'
import { Card } from 'antd';

import './hobbies.css'

const Hobbies = () => {
    const { Meta } = Card;
    const { ref: headerParagrathTagRef, inView: headerParagrathTagInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: airsoftFirstRef, inView: airsoftFirstInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: airsoftSecondRef, inView: airsoftSecondInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: gamingFirstRef, inView: gamingFirstInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: gamingSecondRef, inView: gamingSecondInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: planesFirstRef, inView: planesFirstInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: planesSecondRef, inView: planesSecondInView} = useInView({threshold: 0.3, triggerOnce: true});

    return (
        <section className='hobbies-section' >
            <p ref={headerParagrathTagRef} className={headerParagrathTagInView ? 'slide-in' : ''}>
                By the way, i find myself in an active life position so these are my hobbies below:
            </p>
                    
            <div className='hobbies-cards'>
                <Card ref={airsoftFirstRef} hoverable className={airsoftFirstInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="my airsoft hobby" 
                            src={require('../../images/airsoft-hobby.jpg')} 
                        />
                    }
                >
                    <Meta title="Airsoft" description="fun military simulator" />
                </Card>
                <Card ref={airsoftSecondRef} hoverable className={airsoftSecondInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="my airsoft hobby"
                            src={require('../../images/dreamteam.jpg')} 
                        />
                    }
                >
                    <Meta title="Jakals & MSOT 4112" description="The most powerful thing in airsoft is to cooperate with others" />
                </Card>
                
                <Card ref={gamingFirstRef} hoverable className={gamingFirstInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="gaming with my friends"
                            src={require('../../images/gaming.jpg')} 
                        />
                    }
                >
                    <Meta title="Gaming.." description="especially with my friends" />
                </Card>
                <Card ref={gamingSecondRef} hoverable className={gamingSecondInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="gaming with my friends"
                            src={require('../../images/team-screenshot.jpg')} 
                        />
                    }
                >
                    <Meta title="'Jakals of Azeroth'" description="By the way, my very 1st pet-project was dedicated to our game-community.The precious moments..." />
                </Card>  
                <Card ref={planesFirstRef} hoverable className={planesFirstInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="Planes" src={require('../../images/planes.jpg')}/>
                    }
                >
                    <Meta title="planes" description="learning to fly" />
                </Card>

                <Card ref={planesSecondRef} hoverable className={planesSecondInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="Planes" src={require('../../images/plane.jpg')}/>
                    }
                >
                    <Meta title="Piper PA" description="This one is my favourite model. It was love at first sight and i don't want any other" />
                </Card>
            </div>
        </section>
    )
}
export default Hobbies