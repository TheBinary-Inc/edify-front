import React from 'react';
import './Table.css'
import { NavLink, useRouteMatch } from 'react-router-dom';

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
          </div>
          {/* <Switch>
            <Route path={`${path}/list`}>
                <ListTeacher/>
            </Route>
        </Switch> */}
        </div>
    )
}

export default Table
