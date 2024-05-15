import React from 'react';

function Awards() {
    const awardsData = [
      { event: 'Конкурс программирования',  type: "Региональная", date: '2023-05-15', status: 'Победа', diploma: 'fdasfads.png', points: '20' },
      { event: 'Олимпиада по математике',  type: "Всероссийская", date: '2023-06-20', status: 'Участие', diploma: 'fdasfads.png', points: '10' },
      { event: 'Международный конкурс инноваций', type: "Глобальная", date: '2023-07-10', status: 'Сертификат', diploma: 'innovation_award.png', points: '15' },
      { event: 'Национальное соревнование по программированию', type: "Национальная", date: '2023-08-25', status: 'Диплом', diploma: 'national_programming_competition.png', points: '18' },
      { event: 'Летняя школа по искусству', type: "Местная", date: '2023-09-01', status: 'Участие', diploma: 'summer_art_school.png', points: '8' },
      { event: 'Кубок мира по шахматам', type: "Международная", date: '2023-10-15', status: 'Медаль', diploma: 'world_chess_cup.png', points: '17' },
      { event: 'Фестиваль научных открытий', type: "Межрегиональная", date: '2023-11-30', status: 'Приз', diploma: 'science_festival.png', points: '12' }
    ];

    return (
      <div className="awards-page">
        
        <table>
            <thead>
            <tr>
                <th>Мероприятие</th>
                <th>Тип</th>
                <th>Дата проведения</th>
                <th>Статус</th>
                <th>Диплом</th>
                <th>Баллы</th>
            </tr>
            </thead>
            <tbody>
            {awardsData.map((award, index) => (
                <tr key={index}>
                <td>{award.event}</td>
                <td>{award.type}</td>
                <td>{award.date}</td>
                <td>{award.status}</td>
                <td>{award.diploma}</td>
                <td>{award.points}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
}

export default Awards;