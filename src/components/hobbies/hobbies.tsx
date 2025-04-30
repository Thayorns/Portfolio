import { useInView  } from 'react-intersection-observer'
import { Card } from 'antd';
import React from 'react'

import './hobbies.css'

const Hobbies = () => {
    const { Meta } = Card;
    const { ref: airsoftFirstRef, inView: airsoftFirstInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: airsoftSecondRef, inView: airsoftSecondInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: gamingFirstRef, inView: gamingFirstInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: gamingSecondRef, inView: gamingSecondInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: planesFirstRef, inView: planesFirstInView} = useInView({threshold: 0.3, triggerOnce: true});
    const { ref: planesSecondRef, inView: planesSecondInView} = useInView({threshold: 0.3, triggerOnce: true});

    return (
        <section className='hobbies-section'  >
                    
            <div className='hobbies-cards'>
                <Card ref={airsoftFirstRef} hoverable className={airsoftFirstInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="my airsoft hobby" 
                            src={require('../../images/airsoft-hobby.jpg')} 
                        />
                    }
                >
                    <Meta title="Airsoft"/>
                </Card>
                <Card ref={airsoftSecondRef} hoverable className={airsoftSecondInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="my airsoft hobby"
                            src={require('../../images/dreamteam.jpg')} 
                        />
                    }
                >
                    <Meta title="Jakals & MSOT 4112"/>
                </Card>
                
                <Card ref={gamingFirstRef} hoverable className={gamingFirstInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="gaming with my friends"
                            src={require('../../images/gaming.jpg')} 
                        />
                    }
                >
                    <Meta title="Gaming.."/>
                </Card>
                <Card ref={gamingSecondRef} hoverable className={gamingSecondInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="gaming with my friends"
                            src={require('../../images/team-screenshot.jpg')} 
                        />
                    }
                >
                    <Meta title="'Jakals of Azeroth'"/>
                </Card>  
                <Card ref={planesFirstRef} hoverable className={planesFirstInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="Planes" src={require('../../images/planes.jpg')}/>
                    }
                >
                    <Meta title="planes"/>
                </Card>

                <Card ref={planesSecondRef} hoverable className={planesSecondInView ? 'ant-card-hoverable slide-in' : ''}
                    cover={
                        <img alt="Planes" src={require('../../images/plane.jpg')}/>
                    }
                >
                    <Meta title="Piper PA"/>
                </Card>
            </div>
        </section>
    )
}
export default Hobbies