
import React from 'react';
import { useInView } from 'react-intersection-observer';


const Progress = ({ percent }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className="bar" ref={ref}>
            <div className={`bar-inner count-bar ${inView ? "amimate" : ''}`} style={{ width: inView ? `${percent}%` : "0%" }}>
                <div className="count-text">{percent}%</div>
            </div>
        </div>


    );
};

export default Progress;