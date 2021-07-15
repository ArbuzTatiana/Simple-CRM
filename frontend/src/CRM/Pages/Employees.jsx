import React from 'react';
import './../../App.css';
import EmployeesList from './../Components/Employees/EmployeesList';
import EmployeesContext from './../Contexts/EmployeesContext';

const Employees = () => {
    return (
        <div className="tableWrap">
            <EmployeesContext>
                <EmployeesList/>
            </EmployeesContext>

        </div>
    )
};

export default Employees;