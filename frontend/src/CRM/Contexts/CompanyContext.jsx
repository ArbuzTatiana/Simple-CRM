import React, {createContext, useEffect, useState, useReducer} from "react";
import CompanyReducer, {initialState} from "./../Reducer/CompanyReducer";
import {companiesAPI} from "../API/CompanyAPI";

export const CompanyContext = createContext({
    ...initialState
});

const CompanyContextProvider = (props) => {

    const [state, dispatch] = useReducer(CompanyReducer, initialState );
    const { companies, pageSize, totalCoCount, currentPage} = state;


    const requestCompanies = async (page) => {
        try {
            dispatch({ type: 'SET_CURRENT_PAGE',  currentPage: page})
            const response = await companiesAPI.getCompanies(page);
            dispatch({ type: 'SET_COMPANY_LIST', companies: response.data})
            dispatch({ type: 'SET_TOTAL_COMPANIES_COUNT', totalCoCount: response.total})

        }catch(err){
            console.log(err);
        }
    };


    // const addCompany = (id, name, email, phone_number, website, image) => {
    //     return axios.post(`http://127.0.0.1:8000/api/companies`,  {id, name, email, phone_number, website, image} )
    //     // setCompanies([...companies, {id, name, email, phone_number, website, image}])
    //         .then( res => {
    //             return res.data
    //         })
    // };
    // const deleteCompany = () => {
    // };
    // const updateCompany = () => {
    // };

    return (
        <CompanyContext.Provider value={{
            companies: companies,
            requestCompanies, pageSize, totalCoCount, currentPage
        }}
        >
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider;