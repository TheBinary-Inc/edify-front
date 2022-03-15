import React from 'react';
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { SIDEBAR_STATIC_DATA } from '../../static/Sidebar_Static';

const Admin = () => {
    const { path } = useRouteMatch();
    return (
        <div className="admin__container">
            <Sidebar/>
            <div className="main__container">
                <Header/>
                <Switch>
                    {
                        SIDEBAR_STATIC_DATA?.map(sidebar__item => 
                            <Route key={sidebar__item.id} path={`${path}/${sidebar__item.route}`}>
                                {sidebar__item.component}
                            </Route>
                        )
                    }
                </Switch>
            </div>
        </div>
    )
}

export default Admin
