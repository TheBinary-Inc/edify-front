import React from 'react';
import './Table.css'
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Room_Static } from '../../static/Rooms_Static';
import Lessons from '../lessons/Lessons';

const Table = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="table">
          <h1 className="route__title">Darslar</h1>
            <div className="tabs table_tabs">
                <NavLink activeClassName="teacher_activetab" className="teacher_tab" to={`${url}/alllessons`}>Darslar</NavLink>
                <NavLink activeClassName="teacher_activetab" className="teacher_tab" to={`${url}/allrooms`}>Barcha xonalar</NavLink>
                <NavLink activeClassName="teacher_activetab" className="teacher_tab" to={`${url}/freerooms`}>Bo'sh xonalar</NavLink>
                <NavLink activeClassName="teacher_activetab" className="teacher_tab" to={`${url}/busyrooms`}>Band xonalar</NavLink>
                <NavLink activeClassName="teacher_activetab" className="teacher_tab" to={`${url}/ordered`}>Band qilingan xonalar</NavLink>
          </div>
          <Switch>
          <Route path={`${path}/alllessons`}>
                <Lessons allrooms={true} Room_Static={Room_Static}/>
            </Route>
            <Route path={`${path}/allrooms`}>
                <Lessons Room_Static={Room_Static}/>
            </Route>
            <Route path={`${path}/freerooms`}>
                <Lessons Room_Static={Room_Static.filter(room => !room.roomInfo.busy && !room.roomInfo.ordered )}/>
            </Route>
            <Route path={`${path}/busyrooms`}>
                <Lessons Room_Static={Room_Static.filter(room => room.roomInfo.busy)}/>
            </Route>
            <Route path={`${path}/ordered`}>
                <Lessons Room_Static={Room_Static.filter(room => room.roomInfo.ordered)}/>
            </Route>
        </Switch>

        </div>
    )
}

export default Table
