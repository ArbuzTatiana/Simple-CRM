import React, {createContext, useReducer} from "react";
import CompanyReducer, {initialState} from "./../Reducer/CompanyReducer";
import {companiesAPI, updateAPI} from "../API/CompanyAPI";

export const CompanyContext = createContext({
    ...initialState
});

const CompanyContextProvider = (props) => {

    const [state, dispatch] = useReducer(CompanyReducer, initialState);
    const {companies, pageSize, totalCoCount, currentPage} = state;

    const requestCompanies = async (page) => {
        try {
            const response = await companiesAPI.getCompanies(page);
            dispatch({type: 'SET_CURRENT_PAGE', currentPage: page});
            dispatch({type: 'SET_COMPANY_LIST', payload: response.data});
            dispatch({type: 'SET_TOTAL_COMPANIES_COUNT', totalCoCount: response.total})
        } catch (err) {
            console.log(err);
        }
    };


    const addCompany = async (id, name, email, phone_number, website, image) => {
        try {
            await companiesAPI.addCompany(id, name, email, phone_number, website, image);
            const update = await updateAPI.getCompaniesList();
            dispatch({type: 'SET_COMPANY_LIST', payload: update.data});
        } catch (err) {
            console.log(err);
        }

    };

    const deleteCompany = async (id) => {
        try{
            dispatch({type: 'DELETE_COMPANY', payload: id});
            await companiesAPI.deleteCompany(id);



        }catch (err){
            console.log(err);
        }

    };
    const updateCompany = () => {
    };

    return (
        <CompanyContext.Provider value={{
            companies: companies,
            requestCompanies, pageSize, totalCoCount, currentPage, addCompany, deleteCompany
        }}
        >
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider;