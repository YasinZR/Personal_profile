import React, { useState } from 'react';

function Performance() {
    const performanceData = [
        { subject: 'Информационные технологии', controlForm: 'Экзамен', course: '1', semester: '1', result: 'Хорошо' },
        { subject: 'Архитектура информационных систем', controlForm: 'Экзамен', course: '2', semester: '1', result: 'Отлично' },
        { subject: 'Администрирование информационных систем', controlForm: 'Экзамен', course: '2', semester: '2', result: 'Отлично' },
        { subject: 'Нереляционные базы данных', controlForm: 'Зачет', course: '3', semester: '1', result: 'зачет' },
    ];

    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseSelect = (course) => {
        if (selectedCourse === course) {
            setSelectedCourse(null);
        } else {
            setSelectedCourse(course);
        }
    };

    const filteredData = selectedCourse? performanceData.filter(item => item.course === selectedCourse) : performanceData;

    return (
        <div className="performance-page">
            <div className="course-selection">
                {['1', '2', '3', '4'].map(course => (
                    <button key={course} onClick={() => handleCourseSelect(course)} className='course-button'>{course} курс</button>
                ))}
            </div>
            <table className="performance-table">
                <thead>
                    <tr>
                        <th>Курс</th>
                        <th>Семестр</th>
                        <th>Дисциплина</th>
                        <th>Форма контроля</th>
                        <th>Результат</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.subject}>
                            <td>{item.course}</td>
                            <td>{item.semester}</td>
                            <td>{item.subject}</td>
                            <td>{item.controlForm}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Performance;
