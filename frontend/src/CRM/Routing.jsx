import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './Pages/Home';
import Companies from './Pages/Companies';
import Employees from './Pages/Employees';

const Routing = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/companies">
                <Companies/>
            </Route>
            <Route path="/employees">
                <Employees/>
            </Route>
        </Switch>
    )
};

export default Routing;