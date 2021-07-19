import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routing from './CRM/Routing';
import NavBar from './CRM/NavBar';


function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routing/>
            </div>
        </Router>
    );
}

export default App;
