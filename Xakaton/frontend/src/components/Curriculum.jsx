function Curriculum() {
    const curriculumData = [
        { subject: 'Информационные технологии', teacher: 'Бровко Александр Валерьевич', hours: '144', result: 'зачет с оценкой' },
        { subject: 'Архитектура информационных систем', teacher: 'Дороднова Лилия Владимировна', hours: '180', result: 'экзамен' },
        { subject: 'Администрирование информационных систем', teacher: 'Минаев Ильдар Рашидович', hours: '108', result: 'экзамен' },
        { subject: 'Нереляционные базы данных', teacher: 'Левченко Денис Станиславович', hours: '108', result: 'зачет' },
    ];

    return (
        <div className="curriculum-page">
            <table className="curriculum-table">
                <thead>
                    <tr>
                        <th>Предмет</th>
                        <th>Преподаватель</th>
                        <th>Часы</th>
                        <th>Итог</th>
                    </tr>
                </thead>
                <tbody>
                    {curriculumData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.subject}</td>
                            <td>{item.teacher}</td>
                            <td>{item.hours}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Curriculum;