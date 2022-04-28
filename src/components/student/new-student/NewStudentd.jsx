import React, { useState, useEffect } from 'react'
import './NewStudent.css'
import axios from "../../../apis/new-teacher";


const NewStudentd = () => {
    const [allTeachers, setAllTeachers] = useState([]);
    const [teacherGroups, setTeacherWithGroups] = useState({});
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [shtxr, setShtxr] = useState('');
    useEffect(() => {
        async function getAllTeachers() {
          try {
            let allTeachers = await axios.get("all");
            setAllTeachers(allTeachers?.data.allTeachers);
          } catch (err) {
            console.log(err);
          }
        }
    
        getAllTeachers();
      }, []);


      useEffect(() => {
        let teacherWithId = allTeachers?.filter(t => t?._id === selectedTeacher)[0]
        setTeacherWithGroups(teacherWithId)
      }, [selectedTeacher, allTeachers])

      console.log(selectedTeacher)
    
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
                <select onChange={e => setSelectedTeacher(e.target.value)}>
                    <option defaultValue>O'qituvchini tanlang</option>
                    {
                        allTeachers && allTeachers.map(teacher => 
                            <option key={teacher?._id} value={teacher._id}>{teacher.fullname}</option>    
                        )
                    }
                </select>
                <select >
                    <option defaultValue>Guruhni tanlang</option>
                    {
                        teacherGroups && teacherGroups?.groups?.map(groups => 
                            <option key={groups?._id} value={groups?._id}>{groups?.profession + " " + groups?.groupStart + "-" + groups?.groupEnd}</option>    
                        )
                    }
                </select>
                <button>Qo’shish</button>
            </div>
            </form>
            
        </div>
    )
}

export default NewStudentd
