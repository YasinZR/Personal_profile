import React from 'react';
import userlogo from '../images/userlogo.svg';

const user = [
    {
        id: 1,
        fullName: "Сидоров Игорь Александрович",
        studentNumber: "312522",
        birthDate: "05.02.2003",
        phoneNumber: "8 (964) 778-24-64",
        institute: "Институт прикладных информационных технологий и коммуникаций",
        department: "Прикладные информационные технологии",
        studyDirection: "Информационные системы и технологии",
        course: "2 курс",
        group: "ИФСТ-21",
        admissionYear: "2022"
    }
]

function PersonalData() {
    const { fullName, studentNumber, birthDate, phoneNumber, institute, department, studyDirection, course, group, admissionYear } = user[0];

    return (
        <div className="personal-data-page">
            <form>
                <div className='top-form-group'>
                    <div className="form-group personal-image">
                        <img src={userlogo} alt="Фотография" className='personal-image' />
                    </div>
                    <div className="rigth-top-form">
                        <div className="form-group-top">
                            <label htmlFor="fullName" className='pers-data-label'>ФИО</label>
                            <input className="input-text-personal" type="text" id="fullName" name="fullName" readOnly value={fullName} /> 
                        </div>
                        <div className="form-group-top">
                            <label htmlFor="studentNumber" className='pers-data-label'>Номер зачетки</label>
                            <input className="input-text-personal" type="text" id="studentNumber" name="studentNumber" readOnly value={studentNumber} />
                        </div>
                        <div className="form-group-top">
                            <label htmlFor="birthDate" className='pers-data-label'>Дата рождения</label>
                            <input className="input-text-personal" type="text" id="birthDate" name="birthDate" readOnly value={birthDate}/>
                        </div>
                        <div className="form-group-top">
                            <label htmlFor="phoneNumber" className='pers-data-label'>Номер телефона</label>
                            <input className="input-text-personal" type="text" id="phoneNumber" name="phoneNumber" readOnly value={phoneNumber}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="institute" className='pers-data-label'>Институт</label>
                    <input className="input-text-personal" type="text" id="institute" name="institute" readOnly value={institute} />
                </div>
                <div className="form-group">
                    <label htmlFor="department" className='pers-data-label'>Кафедра</label>
                    <input className="input-text-personal" type="text" id="department" name="department" readOnly value={department} />
                </div>
                <div className="form-group">
                    <label htmlFor="studyDirection" className='pers-data-label'>Направление обучения</label>
                    <input className="input-text-personal" type="text" id="studyDirection" name="studyDirection" readOnly value={studyDirection} />
                </div>
                <div className="form-group">
                    <label htmlFor="course" className='pers-data-label'>Курс</label>
                    <input className="input-text-personal" type="text" id="course" name="course" readOnly value={course} />
                </div>
                <div className="form-group">
                    <label htmlFor="group" className='pers-data-label'>Группа</label>
                    <input className="input-text-personal" type="text" id="group" name="group" readOnly value={group} />
                </div>
                <div className="form-group">
                    <label htmlFor="admissionYear" className='pers-data-label'>Год поступления</label>
                    <input className="input-text-personal" type="text" id="admissionYear" name="admissionYear" readOnly value={admissionYear} />
                </div>
            </form>
        </div>
    );
}

export default PersonalData;
