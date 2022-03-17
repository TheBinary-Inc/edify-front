import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, useRouteMatch } from 'react-router-dom';
import logoLarge from "../../assets/logo.svg";
import logoSmall from "../../assets/logo_small.svg";
// import logoLight from "../../assets/logoLight.svg";
import { FiLogOut } from 'react-icons/fi';

import { SIDEBAR_STATIC_DATA } from '../../static/Sidebar_Static';

const Sidebar = () => {
    const { url } = useRouteMatch();
    const [sidebar, setSidebar] = useState(true);
    
    return (
        <div className="admin__sidebar shadow" style={!sidebar ? {width: "151px"} : null}>
            <img onClick={() => setSidebar(!sidebar)} style={{height: "70px"}} src={!sidebar ? logoSmall : logoLarge } className="sidebar__logo" alt="" />  
            <div className="sidebar__profile">
                <div className="profile__avatar AvatarBlock" > JD </div>
                    <div className="profile__details" style={{color: "#000"}}>
                    {
                      sidebar && 
                      <>
                      <p className="details__username">John Doe</p>
                    <p className="details__occupation">Software Engineer</p>
                    </>
                    }
                </div>
            </div>
            <ul className="sidebar__collection">
        {SIDEBAR_STATIC_DATA?.map((sidebar__tabs) => (
          <li key={sidebar__tabs.id} className="sidebar__collection-item">
            <NavLink
              className="sidebar__links lightmode__simple-link"
              activeClassName="sidebar__activelinks lightmode-link"
              to={`${url}/${sidebar__tabs.route}`}
            >
              {sidebar__tabs.icon} {sidebar &&   <p>{sidebar__tabs.sidebarTitle}</p>}
              {!sidebar && <div className="tooltip"> {sidebar__tabs.sidebarTitle}</div>}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="sidebar__logout" style={!sidebar ? {width: "70%", paddingLeft: "15px"} : null}> <FiLogOut/>{sidebar &&  "Tizimdan chiqish"}</button>
      <p className="sidebar__copyright Copyright__less" >
        © {new Date().getUTCFullYear()} All rights reserved!
      </p>
      <p className="sidebar__madeby Copyright__less">Made by Edify Team</p>
        </div>
    )
}

export default Sidebar
