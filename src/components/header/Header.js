import React, { useState } from 'react'
import './Header.css'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

import { ReactComponent as StudentIcon } from "../../assets/UI-icons/student-lg.svg";
import { ReactComponent as MoneyIcon } from "../../assets/UI-icons/money-lg.svg";
import { ReactComponent as GroupsIcon }from "../../assets/UI-icons/groups-lg.svg";
import { ReactComponent as CalendarIcon } from "../../assets/UI-icons/calendar.svg";
import { ReactComponent as SearchIcon } from "../../assets/UI-icons/search.svg";
import { ReactComponent as TimesIcon } from "../../assets/UI-icons/times.svg";

const Header = () => {
    const [search, setSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue);

    const [selectedDay, setSelectedDay] = useState(null);
    const date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    const renderCustomInput = ({ ref }) => (
        <input
          readOnly
          ref={ref} // necessary
          placeholder={`${day < 10 ? "0" + (day) : day}/${month < 10 ? "0" + (month + 1 ): month}/${year}`}
          value={selectedDay ? `${selectedDay.day < 10 ? "0" + selectedDay.day : selectedDay.day}/${ selectedDay.month < 10 ? `0${selectedDay.month}` : selectedDay.month}/${selectedDay.year}` : ''}
          className="my-custom-input-class" // a styling class
        />
      )
      


    return (
      <>
        <div className="header_container">
          <div className="header_wrapper" >
            <div className="header__categories" style={
            search ? {transitionDelay: ".4s", opacity: "0", zIndex: "-1"} : {transitionDelay: ".1s",opacity: "1", zIndex: "0"}
          }>
            <div className="category__icon">
              <StudentIcon />
            </div>
            <div className="category__details">
              <p className="category__title">O'quvchilar soni</p>
              <p className="category__quantity">116ta</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="header__categories" style={
            search ? {transitionDelay: ".3s",opacity: "0", zIndex: "-1"} : {transitionDelay: ".2s",opacity: "1", zIndex: "0"}
          }>
            <div className="category__icon">
              <GroupsIcon />
            </div>
            <div className="category__details">
              <p className="category__title">Guruhlar soni</p>
              <p className="category__quantity">10ta</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="header__categories" style={
            search ? {transitionDelay: ".2s",opacity: "0", zIndex: "-1"} : {transitionDelay: ".3s",opacity: "1", zIndex: "0"}
          }>
            <div className="category__icon">
            <MoneyIcon />
            </div>
            <div className="category__details">
              <p className="category__title">To'lov qilmaganlar soni</p>
              <p className="category__quantity">16ta</p>
            </div>
          </div>
          <div className="header_calendar" style={
            search ? {transitionDelay: ".1s",opacity: "0", zIndex: "-1"} : {transitionDelay: ".4s",opacity: "1", zIndex: "0"}
          }>
            <CalendarIcon />
            <DatePicker
                calendarClassName="custom_calendar"
                value={selectedDay}
                onChange={setSelectedDay}
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
                colorPrimary="#FF3B30"  
            />
          </div>
          <form className="header_search" 
            style={
              search === true ? {position: "absolute", right: "2.5%", width: "95%", transition: ".9s"} : {position: "absolute", right: "2.5%", width: "70px", transition: ".6s", zIndex: "0"}
            }
          >
              <div onClick={() => {setSearch(true)}}  style={search ? {position: "absolute", left: "1.5%"} : {position: "static", width: "60px", display: "flex", alignItems: "center", justifyContent: "center"}}><SearchIcon /></div>
              <TimesIcon onClick={() => setSearch(false)} style={search ? {position: "absolute", right: "1.5%"} : {display: "none"}}/>
              <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="O'qituvchilarni qidirish..." style={ search ? {width: "93%", height: "61px", outline: "none", border: "none", background: "#F7F7F7", fontSize: "20px", textIndent: "30px", fontFamily: "Poppins", transition: "1s"} : {width: "0",  height: "0px", outline: "none", border: "none", background: "#F7F7F7", fontSize: "20px", textIndent: "10px", position: "absolute", fontFamily: "Poppins", transition: ".1s"}}/>
            </form>
            <div></div>
          </div>
          
        </div>
      </>
    )
}

export default Header
