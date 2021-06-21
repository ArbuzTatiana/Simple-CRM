import React from 'react';
import './../../App.css';
import DataTable from './../Common/DataTable';

const Employees = () => {
    return (
        <div className="tableWrap">
            <h2>Employees list</h2>
            <DataTable />
        </div>
    )
};

export default Employees;