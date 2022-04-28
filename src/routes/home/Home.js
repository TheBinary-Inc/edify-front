import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import logoLarge from "../../assets/logo.svg";
import Footer from '../../components/footer/Footer';
import banner_image from "../../assets/banner_image.png"

const Home = () => {
    
    return (
        <div className="home_container">
            <nav>
                <img src={logoLarge} alt=""/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <select>
                        <option value="">🇺🇸 English</option>
                        <option value="">🇳🇱 Русский</option>
                        <option value="">🇺🇿 O'zbek</option>
                    </select>
                    <Link to="/login" id="btn">Request a demo</Link>
                </ul>
            </nav>
            <div className="home_banner">
                <div className="text">
                    <h1>Start your learning our experts trainers</h1>
                    <p>Build your skill from world-class universities and companies, you can learn online and earn certifications and degrees.</p>
                </div>
                <img src={banner_image} alt="" />
            </div>
            <Footer/>
        </div>
    )
}

export default Home
