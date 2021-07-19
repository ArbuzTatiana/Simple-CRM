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

    const addCompany = async (newCompany) => {
        try {
            dispatch({type: "SET_NEW_COMPANY", payload: newCompany});
            await companiesAPI.addCompany(newCompany);
            const update = await updateAPI.getCompaniesList();
            console.log(update)
            dispatch({type: "SET_COMPANY_LIST", payload: update.data});
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCompany = async (id) => {
        try {
            dispatch({type: "DELETE_COMPANY", payload: id});
            await companiesAPI.deleteCompany(id);
        } catch (err) {
            console.log(err);
        }

    };

    const updateCompany = async (id, updatedCompany) => {
        try {
            const res = await companiesAPI.updateCompany(id, updatedCompany);
            dispatch({type: "EDIT_COMPANY", payload: {id, updatedCompany}});
            console.log(res)
            const update = await updateAPI.getCompaniesList();
            dispatch({type: "SET_COMPANY_LIST", payload: update.data});

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <CompanyContext.Provider value={{
            companies: companies,
            requestCompanies, pageSize, totalCoCount, currentPage,
            addCompany, deleteCompany, updateCompany
        }}
        >
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider;