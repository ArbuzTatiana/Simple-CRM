import React, {createContext, useReducer} from "react";
import EmployeesReducer, {initialState} from "./../Reducer/EmployeesReducer";
import {employeesAPI, updateAPI} from "../API/EmployeesAPI";

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

    const addEmployee = async (newEmployee) => {
        try {
            dispatch({type: "SET_NEW_EMPLOYEE", payload: newEmployee});
            await employeesAPI.addEmployee(newEmployee);
            const update = await updateAPI.getEmployeesList();
            dispatch({type: "GET_EMPLOYEE_LIST", payload: update.data});
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <EmployeesContext.Provider value={{
            employees: employees,
            requestEmployees, pageSize, totalCoCount, currentPage,
            addEmployee,
        }}>
            {props.children}
        </EmployeesContext.Provider>
    )
};

export default EmployeesContextProvider;