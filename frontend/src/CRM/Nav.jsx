import React from 'react';
import './../App.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <div>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/companies" activeClassName="activeLink" >Companies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/employees" activeClassName="activeLink">Employees</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Nav;