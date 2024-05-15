import React from 'react';
import sheduleOne from '../images/shedule-1week.png';
import sheduleTwo from '../images/shedule_2week.png';

function Schedule() {
    return (
        <div className="shedule-page">
            <div className='shedule-card'>
                <img src={sheduleOne} alt="Weekly Schedule" className='shedule-one'/>
            </div>
            <div className='shedule-card'>
                <img src={sheduleTwo} alt="Biweekly Schedule" className='shedule-two'/>
            </div>
        </div>
    );
}

export default Schedule;