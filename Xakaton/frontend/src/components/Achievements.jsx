import React from 'react';
import ach1 from '../images/ach1.png';
import ach2 from '../images/ach2.png';
import ach3 from '../images/ach3.png';
import ach4 from '../images/ach4.png';
import ach5 from '../images/ach5.png';
import ach6 from '../images/ach6.png';
import ach7 from '../images/ach7.png';

function Achievements() {

    const achievements = [
        { id: 1, src: ach1, description: "Заполнитель Профиля", completed: true, annotation: 'Выдается  за  заполнение профиля' },
        { id: 2, src: ach2, description: "Лидер Рейтинга", completed: false, annotation: 'Выдается  за  первого места в рейтинге' },
        { id: 3, src: ach3, description: "Лучший Исследователь", completed: true, annotation: 'Выдается  за публикацию научной статьи' },
        { id: 4, src: ach4, description: "Первые шаги", completed: true, annotation: 'Выдается  за победу  в олимпиаде' },
        { id: 5, src: ach5, description: "Мастер Олимпиад", completed: true, annotation: 'Выдается за победу  в 5 олимпиадах' },
        { id: 6, src: ach6, description: "Эксперт Олимпиад", completed: true, annotation: 'Выдается за победу  в 10 олимпиадах' },
        { id: 7, src: ach7, description: "Заполнитель Профиля", completed: true, annotation: 'Выдается  за  заполнение профиля' },
    ];

    return (
        <div className="achievements-page">
            <div className='ach-title'>Достижения</div>
            <div className="achievements-grid">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className='achievement-item'>
                        <div className="achievement-content">
                            <img src={achievement.src} alt={achievement.description} className='ach-image'/>
                            <div className='ach-description'>{achievement.description}</div>
                            <div className='ach-annotation'>{achievement.annotation}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;