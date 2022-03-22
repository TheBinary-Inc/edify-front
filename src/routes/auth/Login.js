import React from 'react';
import './Login.css';
import logo from '../../assets/logo.svg'

const Login = () => {
    return (
        <div className="login_page">
            <div className="login_panel">
                <img className="login_logo" src={logo} alt="" />
                <h1 className="login_title">Tizimga kirish</h1>
                <form>
                    <input className="login_input" type="text" placeholder="Foydalanuvchi nomingiz"/>
                    <input className="login_input" type="text" placeholder="Foydalanuvchi parolingiz"/>
                </form>
            </div>  
        </div>
    )
}

export default Login
