import React, {createContext, useReducer} from "react";
import EmployeesReducer, {initialState} from "./../Reducer/EmployeesReducer";
import {employeesAPI} from "../API/EmployeesAPI";

export const EmployeesContext = createContext({
    ...initialState
});

const EmployeesContextProvider = (props) => {

    const [state, dispatch] = useReducer(EmployeesReducer, initialState);
    const {employees} = state;

    const requestEmployees = async () => {
        try {
            const response = await employeesAPI.getEmployees();
            dispatch({type: 'GET_EMPLOYEE_LIST', payload: response.data});
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <EmployeesContext.Provider value={{employees: employees, requestEmployees}}>
            {props.children}
        </EmployeesContext.Provider>
    )
};

export default EmployeesContextProvider;