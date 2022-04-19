import React from 'react'
import "./Personal.css"
import   location from "../../assets/personal-svg/location.svg"
import call from "../../assets/personal-svg/call.svg"
import foyiz from "../../assets/personal-svg/foyiz.svg"
import medal from "../../assets/personal-svg/medal.svg"
import dog from "../../assets/personal-svg/dog.svg"

const Personal = () => {
  return (
    <div className='personal_container'>
        <div className="information_wrapper">
            <div className="profile"> </div>
            <h1>John Doe </h1>
            <span style={{marginLeft: "25px"}}>O'quvchilar soni: <span style={{color: "red"}}> 106ta</span></span>
            <span style={{marginRight: "45px"}}>Guruhlar soni:<span style={{color: "red"}}> 7ta</span></span>
            <span style={{marginLeft: "35px"}}>Maoshi:<span style={{color: "#2cce2c"}}> 4.000.000 so'm</span></span>
        </div>
        <div className="contact">
            <div className="location" style={{marginLeft: "-15px"}}>
                <img src={location} alt="" />
                <span> 20-uy, Bo’lon, Chortoq,  Namangan viloyati</span>
            </div>
            <div className="location">
                <img src={call} alt="" />
                <span> +998999787525, +998999787526</span>
            </div>
            <div className="location" style={{marginLeft: "-5px"}}>
                <img src={foyiz} alt="" />
                <span> 40%</span>
            </div>
            <div className="location" style={{marginLeft: "-10px"}}>
                <img src={medal} alt="" />
                <span> Dasturiy muhandis</span>
            </div>
            <div className="location">
                <img src={dog} alt="" />
                <span>BRIGHT_2305</span>
            </div>
        </div>
        <div className="certificate">
            <div className="certificate_img">

            </div>
            <button>Yuklab olish</button>
        </div>
    </div>
  )
}

export default Personal