import React from 'react';
import './ListTeacher.css';
import { FaUserTie } from 'react-icons/fa' 
import { Teachers_Data } from '../../static/Sidebar_Static'
import salary from '../../assets/UI-icons/money-bill.svg';

const ListTeacher = () => {
    const abbrivateName = (fullname) => {
        console.log(fullname)
        if(fullname){
            return fullname.split(" ").slice(0, 2)[0].charAt(0) + fullname.split(" ").slice(0, 2)[1].charAt(0)
        }
        else{
            return <FaUserTie/>
        }
    }
    return (
        <div className="list__teacher">
        <div className="teachers_container">
            {
                Teachers_Data?.map(teacher =>
                    <div className="teacher_box" key={teacher.id}>
                        <h1 className='avatar'>{abbrivateName(teacher.collectionUL[0].fullName)}</h1>
                        <h3> {teacher.occupation} </h3>
                        {
                            teacher.collectionUL.map((teacher_info, index) =>
                                <ul key={index} className="teacher_info">
                                    <li> {teacher_info.fullName} </li>
                                    <li><img src={salary} alt="" /> {teacher_info.salary} </li>
                                    <li> <p>O'quchilari</p> {teacher_info.pupilsNumber}ta <p style={{paddingLeft: "10px"}}>Guruhlari</p> {teacher_info.groups} </li>
                                </ul>
                            )
                        }
                       <button>Batafsil</button>
                    </div>
                )
            }
        </div>
      </div>
    )
}

export default ListTeacher
