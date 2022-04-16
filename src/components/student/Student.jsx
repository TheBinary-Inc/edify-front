import React from 'react';
import './Student.css'
import { NavLink, useRouteMatch } from 'react-router-dom';

const Student = () => {
  const { url } = useRouteMatch();
  return (
    <div>
       <h1 className="route__title">O'quvchilar</h1>
      <div className="tabs" id="auto">
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/new`}
        >
          O'quvchi qo'shish
        </NavLink>
        
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/personal`}
        >
          Shaxsiy ma'lumot
        </NavLink>
      </div>
    </div>
  )
}

export default Student
