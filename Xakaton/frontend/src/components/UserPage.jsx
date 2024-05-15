import React from 'react';
import { useParams } from 'react-router-dom';
import { users} from './Users';
import userLogo from '../images/userlogo.svg';

import headGrades from '../images/head-grades.png';

function UserPage() {
    const { cardNumber } = useParams();

    const findUser = (users) => {
        return users.find(user => user.cardNumber === parseInt(cardNumber));
    };

    const user = findUser(users);

    if (!user) {
        return <div className='not-found-user'>Пользователь не найден</div>;
    }

    const gradesArray = user.grades;

    const gradeCounts = {
        satisfactory: gradesArray.filter(grade => grade === 3).length,
        good: gradesArray.filter(grade => grade === 4).length,
        excellent: gradesArray.filter(grade => grade === 5).length,
    };

    const average = gradesArray.reduce((acc, grade) => acc + grade, 0) / gradesArray.length;

    return (
        <div className="user-page">
            <div className="user-info-left">
                <img src={userLogo} alt="User" className="user-image" />
                <div className="rating-info">
                    
                    <div className='avg-card'>
                        <img src={headGrades} alt="head-grades" className="image-grades" />
                        <div>Средний балл</div>
                        <div>{average.toFixed(2)}</div>
                    </div>

                    <div className='grades'>
                        <div className='grades-card'>
                            <div className="satisfactory">Удовл.</div>
                            <div className='grade-count'>{gradeCounts.satisfactory === 0? "-" : gradeCounts.satisfactory}</div>
                        </div>
                        <div className='grades-card'>
                            <div className='good'>Хор.</div>
                            <div className='grade-count'>{gradeCounts.good === 0? "-" : gradeCounts.good}</div>
                        </div>
                        <div className='grades-card'>
                            <div className='excellent'>Отл.</div>
                            <div className='grade-count'>{gradeCounts.excellent === 0? "-" : gradeCounts.excellent}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="user-info-right">
                <div className='user-info-right-name'>{user.name}</div>

                <div className='details-info'>
                    <div className='user-info-right-text'>Группа</div>
                    <input type="text" value={user.group} readOnly />
                </div>
                <div className='details-info'>
                    <div className='user-info-right-text'>Специальность</div>
                    <input type="text" value={user.specialty} readOnly />
                </div>
                <div className='details-info'>
                    <div className='user-info-right-text'>Кафедра</div>
                    <input type="text" value={user.department} readOnly />
                </div>
                <div className='details-info'>
                    <div className='user-info-right-text'>Факультет</div>
                    <input type="text" value={user.faculty} readOnly />
                </div>

            </div>
        </div>
    );
}

export default UserPage;