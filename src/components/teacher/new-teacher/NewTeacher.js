import React, { useState } from "react";
import "../new-teacher/Newteacher.css";
const NewTeacher = () => {
  const [shadow, setShadow] = useState(false)
  return (
    <div className="new__teacher__main__container">
      <h1 style={{padding: "20px"}}>O'qituvchi qo'shish</h1>
      <div className="registration_teacher">
        <form>
          
            <p>O'qituvchi ismi <span>*</span></p>
            <input type="text" placeholder="O'qituvchi ismi" required/>
            <p>O'qituvchi Familiyasi <span>*</span></p>
            <input type="text" placeholder="O'qituvchi Familiyasi" required/>
            <p>Telefon raqam <span>*</span></p>
            <div className="phone_number" onClick={() => {setShadow(!shadow)}} style={shadow ? {boxShadow: "#EE4236 0px 0px 10px"} : null}>
              <input type="number" placeholder="+998 (--) --- -- --" required/>
              <input type="number" placeholder="+998 (--) --- -- --" required/>
            </div>
            <p>O'qituvchi mutaxasisligi <span>*</span></p>
            <input type="text" placeholder="O'qituvchi mutaxasisligi" required/>
            <p>E-mail</p>
            <input type="email" placeholder="E-mail"/>
            <p>Telegram user name</p>
            <input type="text" placeholder="Telegram user name"/>
            <button>Qo'shish</button>
          
        </form>
      </div>
    </div>
  );
};

export default NewTeacher;
