import React, {createContext, useReducer} from "react";
import EmployeesReducer, {initialState} from "./../Reducer/EmployeesReducer";
import {employeesAPI} from "../API/EmployeesAPI";

export const EmployeesContext = createContext({
    ...initialState
});

const EmployeesContextProvider = (props) => {

    const [state, dispatch] = useReducer(EmployeesReducer, initialState);
    const {employees, pageSize, totalCoCount, currentPage} = state;

    const requestEmployees = async (page) => {
        try {
            const response = await employeesAPI.getEmployees(page);
            dispatch({type: 'SET_CURRENT_PAGE', currentPage: page});
            dispatch({type: 'GET_EMPLOYEE_LIST', payload: response.data});
            dispatch({type: 'SET_TOTAL_EMPLOYEES_COUNT', totalCoCount: response.total})

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <EmployeesContext.Provider value={{
            employees: employees,
            requestEmployees, pageSize, totalCoCount, currentPage,
        }}>
            {props.children}
        </EmployeesContext.Provider>
    )
};

export default EmployeesContextProvider;