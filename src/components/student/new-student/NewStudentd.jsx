import React from 'react'
import './NewStudent.css'

const NewStudentd = () => {
    return (
        <div className="new_student">
            <form>
            <div className="first_column">
                <span>O’quvchi ism va familiyasi</span>
                <input type="text" required autoFocus/>
                <span>O’quvchi telefon raqami</span>
                <input type="number" required/>
                <span>O’quvchi ota-onasi telefon raqami</span>
                <input type="number" required/>
                <div className="pasport_info">
                    <div className="student_date">
                        <span>O’quvchi tug’ilgan sanasi</span>
                        <input type="date" required/>
                    </div>
                    <div className="student_passport">
                        <span>O’quvchi  SHTXR</span>
                        <input type="text" required/>
                    </div>
                </div>
                <span>O’quvchi manzili</span>
                <input type="text" required/>
            </div>
            <div className="second_column">
                <span>O’quvchi guruhi </span>
                <input type="text" required/>
                <span>O’quvchi to’lov summasi </span>
                <input type="text" required/>
                <button>Qo’shish</button>
            </div>
            </form>
            
        </div>
    )
}

export default NewStudentd
