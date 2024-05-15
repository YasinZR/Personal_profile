import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logorating from '../images/ratingLogo.png';

function Rating() {
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/students')
           .then(response => response.json())
           .then(data => {
                const sortedData = [...data].sort((a, b) => b.points - a.points);
                setSortedUsers(sortedData);
            })
           .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="rating-page">
            <div className='rating-award'>
                <img src={logorating} className='rating-award-image' />
            </div>
            <table>
                <thead>
                <tr>
                    <th>Место</th>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Баллы</th>
                </tr>
                </thead>
                <tbody>
                {sortedUsers.map((item, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td><Link to={`/user/${item.cardNumber}`}>{item.name}</Link></td>
                    <td>{item.specialty}</td>
                    <td>{item.studentsGroup}</td>
                    <td>{item.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Rating;
