import React from "react";
import {createContext, useEffect, useState} from 'react';
import * as axios from "axios";

export const CompanyContext = createContext();

const CompanyContextProvider = (props) => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/companies';
        axios.get(apiUrl).then((res) => {
            setCompanies(res.data.data);
            });
    }, [setCompanies]);

    const addCompany = () => {

    };
    const deleteCompany = () => {
    };
    const updateCompany = () => {
    };

    return (
        <CompanyContext.Provider value={{companies, addCompany}}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider;