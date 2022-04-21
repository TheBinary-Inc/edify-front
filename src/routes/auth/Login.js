import React, { useEffect, useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { FiAlertCircle, FiCheckCircle} from 'react-icons/fi';
import login_instance from '../../apis/new-teacher';
import { Redirect, useLocation } from 'react-router-dom';
import Loader from "../../components/loader/Loader";
import { authUserSuccess, authUserFail } from '../../redux/actions/authActions';

const Login = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [messageServer, setMessageServer] = useState('');
    const [success, setSuccess] = useState(false);

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
        return () => validate()
    }, [loginData])



    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true);
        login_instance.post("login", {
          username: username,
          password: password,
        }, {timeout: 10000})
        .then(newUser =>{
           dispatch(authUserSuccess(newUser.data))
           setLoading(false)
           setSuccess(true)
           setMessageServer(newUser.data.message);
          })
        .catch(err => {
            dispatch(authUserFail())
            setLoading(false)
            setSuccess(false)
          if(err.code){
            setMessageServer("Internet bilan ulanishni tekshiring!")
            console.log(err.message)
            }
            else{
            setMessageServer(err?.response?.data.message);

            }
        })
    }

    const loaderStyle = {
        fontSize: "25px",
        marginRight: "10px"
      }

    return user.isAuthenticated ?  <Redirect
    to={{
      pathname: "/admin",
      state: {
        from: location.pathname
      }
    }}
  /> : (
        <div className="login_page">
            <div className="login_panel">
                <img className="login_logo" src={logo} alt="" />
                <h1 className="login_title">Tizimga kirish</h1>
                {
                    messageServer && <p className="server__message" style={success ? {background: "#1aac1a"} : {background: "#e82c2c"}}>{messageServer}</p>
                }
                <form id="login_form" onSubmit={handleLogin} >
                    <input required minLength="5" className="login_input" value={loginData.username}
                    onChange={e => {setUsername(e.target.value)
                        setLoginData({...loginData, username: e.target.value})}
                    } 
                    type="text" placeholder="Foydalanuvchi nomingiz"/>
                    <input required minLength="8" className="login_input" value={loginData.password}
                     onChange={e => {setPassword(e.target.value)
                        setLoginData({...loginData, password: e.target.value})}
                    }
                    type="password" placeholder="Foydalanuvchi parolingiz"/>
                    {
                        message && <p className="login_validatealert" style={message.includes("emas") ? {color: "red"} : {color: "green"}}> {message.includes("emas") || message.includes("Iltimos") ? <FiAlertCircle/> : <FiCheckCircle/>} {message}</p>
                    }
                    <p className="login_persist"> <input className="persist_check" type="checkbox" />  Meni tizimga kirgan xolda saqlang</p>
                    <button type="submit" className="login_submit" disabled={loading} style={loading ? {opacity: 0.7} : {opacity: 1}}>{loading && <Loader loaderStyle={loaderStyle}/>} Kirish</button>
                </form>
                <p className="login_copyright">© Copyright 2022. All rights reserved!</p>
            </div>  
        </div>
    )
}

export default Login;