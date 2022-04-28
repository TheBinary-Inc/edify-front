import React, { useState, useEffect } from 'react';
import axios from "../../../apis/new-teacher";


const NewGroup = () => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [profession, setProfession] = useState('');
  const [groupStart, setgGroupStart] = useState('');
  const [groupEnd, setGroupEnd] = useState('');
  const [room, setRoom] = useState('');
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

  console.log(selectedTeacher)

  const createNewGroup = (e) => {
    e.preventDefault();
    axios.patch(`/update-group/${selectedTeacher}`, {
      profession,
      groupStart,
      groupEnd,
      room,
      busy: true
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div className="new_student">
       <form onSubmit={createNewGroup}>
       <div className="first_column">
                <span>Guruh mutaxasisligi</span>
                <input type="text" required autoFocus value={profession} onChange={e => setProfession(e.target.value)}/>
                <div className="pasport_info">
                  <div className="student_passport">
                          <span>Guruh boshlanish vaqti</span>
                          <input type="text" required value={groupStart} onChange={e => setgGroupStart(e.target.value)}/>
                      </div>
                    <div className="student_passport">
                        <span>Guruh tugash vaqti</span>
                        <input type="text" required  value={groupEnd} onChange={e => setGroupEnd(e.target.value)}/>
                    </div>
                </div>
                <span>Xona raqami</span>
                <input type="text" required  value={room} onChange={e => setRoom(e.target.value)}/>
                <select onChange={e => setSelectedTeacher(e.target.value)}>
                    <option defaultValue>O'qituvchini tanlang</option>
                    {
                        allTeachers && allTeachers.map(teacher => 
                            <option key={teacher?._id} value={teacher._id}>{teacher.fullname}</option>    
                        )
                    }
                </select>
                <button>Qo’shish</button>

            </div>
       </form>
    </div>
  )
}

export default NewGroup
