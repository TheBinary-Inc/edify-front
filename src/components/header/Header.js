import React, { useState } from 'react'
import './Header.css'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

import { ReactComponent as StudentIcon } from "../../assets/UI-icons/student-lg.svg";
import { ReactComponent as MoneyIcon } from "../../assets/UI-icons/money-lg.svg";
import { ReactComponent as GroupsIcon }from "../../assets/UI-icons/groups-lg.svg";
import { ReactComponent as CalendarIcon } from "../../assets/UI-icons/calendar.svg";
import { ReactComponent as SearchIcon } from "../../assets/UI-icons/search.svg";

const Header = () => {

    const [selectedDay, setSelectedDay] = useState(null);
    const date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    const renderCustomInput = ({ ref }) => (
        <input
          readOnly
          ref={ref}
          placeholder={`${day < 10 ? "0" + (day) : day}/${month < 10 ? "0" + (month + 1 ): month}/${year}`}
          value={selectedDay ? `${selectedDay.day < 10 ? "0" + selectedDay.day : selectedDay.day}/${ selectedDay.month < 10 ? `0${selectedDay.month}` : selectedDay.month}/${selectedDay.year}` : ''}
          className="my-custom-input-class"
        />
      )

    return (
        <div className="header_container">
            <div className="header__categories">
            <div className="category__icon">
              <StudentIcon />
            </div>
            <div className="category__details">
              <p className="category__title">O'quvchilar soni</p>
              <p className="category__quantity">116ta</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="header__categories">
            <div className="category__icon">
              <GroupsIcon />
            </div>
            <div className="category__details">
              <p className="category__title">Guruhlar soni</p>
              <p className="category__quantity">10ta</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="header__categories">
            <div className="category__icon">
            <MoneyIcon />
            </div>
            <div className="category__details">
              <p className="category__title">To'lov qilmaganlar soni</p>
              <p className="category__quantity">16ta</p>
            </div>
          </div>
          <div className="header_calendar">
            <CalendarIcon />
            <DatePicker
                calendarClassName="custom_calendar"
                value={selectedDay}
                onChange={setSelectedDay}
                renderInput={renderCustomInput}
                shouldHighlightWeekends
                colorPrimary="#FF3B30"
            />
          </div>
          <div className="header_search" >
              <SearchIcon />
          </div>
        </div>
    )
}

export default Header