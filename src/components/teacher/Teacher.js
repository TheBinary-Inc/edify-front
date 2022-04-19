import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import ListTeacher from "../list-teacher/ListTeacher";
import Personal from '../personal/Personal';
import NewTeacher from "../teacher/new-teacher/NewTeacher";
import Notification from '../notifications/Notifications';
import "./Teacher.css";

const Teacher = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="teacher">
      <h1 className="route__title">O'qituvchilar</h1>
      <div className="tabs">
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/new`}
        >
          O'qituvchi qo'shish
        </NavLink>
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/groups`}
        >
          Guruhlar
        </NavLink>
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/personal`}
        >
          Shaxsiy ma'lumot
        </NavLink>
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/list`}
        >
          O'qituvchilar ro'yxati
        </NavLink>
        <NavLink
          activeClassName="teacher_activetab"
          className="teacher_tab"
          to={`${url}/notifications`}
        >
          Xabarlar
        </NavLink>
      </div>
      <Switch>
        <Route path={`${path}/list`}>
          <ListTeacher />
        </Route>
        <Route path={`${path}/new`}>
          <NewTeacher />
        </Route>
        <Route path={`${path}/personal`}>
          <Personal />
        </Route>
        <Route path={`${path}/notifications`}>
          <Notification />
        </Route>
      </Switch>
    </div>
  );
};

export default Teacher;
