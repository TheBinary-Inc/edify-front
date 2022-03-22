import React, { useEffect, useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.svg';
import { FiAlertCircle, FiCheckCircle} from 'react-icons/fi';

const Login = () => {
    const [loginData, setLoginData] = useState({username: "", password: ""});
    const [message, setMessage] = useState("");
    useEffect(() => {
        function validate(){
            if(!loginData.username && !loginData.password){
                setMessage("Iltimos, barcha ma'lumotni to'ldiring!");
            }
            else if(loginData.username.trim().length < 5){
                setMessage("Foydalanuvchi nomi yaroqli emas!");
            }
            else if(loginData.password.trim().length === 0){
                setMessage("Foydalanuvchi parolini kiriting!");
            }
            else if(loginData.password.trim().length < 8){
                setMessage("Foydalanuvchi paroli yaroqli emas!");
            }
            else{
                setMessage("Barcha malumotlar yaroqli!")
            }
        }
        validate()
    }, [loginData])
    return (
        <div className="login_page">
            <div className="login_panel">
                <img className="login_logo" src={logo} alt="" />
                <h1 className="login_title">Tizimga kirish</h1>
               
                <form id="login_form">
                    <input required minLength="5" className="login_input" value={loginData.username} onChange={e => setLoginData({...loginData, username: e.target.value})} type="text" placeholder="Foydalanuvchi nomingiz"/>
                    <input required minLength="8" className="login_input" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} type="password" placeholder="Foydalanuvchi parolingiz"/>
                    {
                        message && <p className="login_validatealert" style={message.includes("emas") ? {color: "red"} : {color: "green"}}> {message.includes("emas") || message.includes("Iltimos") ? <FiAlertCircle/> : <FiCheckCircle/>} {message}</p>
                    }
                    <p className="login_persist"> <input className="persist_check" type="checkbox" />  Meni tizimga kirgan xolda saqlang</p>
                    <button type="submit" className="login_submit">Kirish</button>
                </form>
                <p className="login_copyright">© Copyright 2022. All rights reserved!</p>
            </div>  
        </div>
    )
}

export default Login
