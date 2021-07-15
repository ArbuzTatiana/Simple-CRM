export const GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST';

export const initialState = {
    employees: []
};

const EmployeesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_EMPLOYEE_LIST':
            return {
                ...state,
                employees: action.payload
            };

        default:
            return state;
    }
};

export default EmployeesReducer;