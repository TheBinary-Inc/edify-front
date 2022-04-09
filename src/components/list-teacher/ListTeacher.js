import React, { useEffect, useState } from 'react';
import './ListTeacher.css';
import { FaUserTie } from 'react-icons/fa' 
import salary from '../../assets/UI-icons/money-bill.svg';
import axios from '../../apis/new-teacher';
import Loader from '../loader/Loader';

const ListTeacher = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(false);
    const abbrivateName = (fullname) => {
        console.log(fullname)
        if(fullname){
            return fullname.split(" ").slice(0, 2)[0].charAt(0) + fullname.split(" ").slice(0, 2)[1].charAt(0)
        }
        else{
            return <FaUserTie/>
        }
    }

    useEffect(() => {
       async function getAllTeachers (){
            setLoading(true)
            try{
                let allTeachers = await axios.get('all');
                setTeachers(allTeachers?.data.allTeachers)
                setLoading(false)
            }
            catch(err){
                console.log(err)
                setLoading(false)
            }
        }

        getAllTeachers();
    }, [])

    const loaderStyle = {
        position: "absolute",
        left: "45%",
        top: "40%",
        fontSize: "50px"
    }


    return (
        <div className="list__teacher">
        <div className="teachers_container">
            {!loading ?
                teachers?.map(teacher =>
                    <div className="teacher_box" key={teacher._id}>
                        <h1 className='avatar'>{abbrivateName(teacher.fullname)}</h1>
                        <h3> {teacher.profession} </h3>
                        <ul key={teacher._id} className="teacher_info">
                                    <li> {teacher.fullname} </li>
                                    <li><img src={salary} alt="" /> {teacher.percent} </li>
                                    <li> <p>O'quchilari</p> 0 ta <p style={{paddingLeft: "10px"}}>Guruhlari</p>0 ta </li>
                        </ul>
                       <button>Batafsil</button>
                    </div>
                ) : <Loader loaderStyle={loaderStyle}/>
            }
        </div>
      </div>
    )
}

export default ListTeacher
