export const GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST';
export const SET_TOTAL_EMPLOYEES_COUNT = 'SET_TOTAL_EMPLOYEES_COUNT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const initialState = {
    employees: [],
    pageSize: 15,
    totalCoCount: 0,
    currentPage: 1,
};

const EmployeesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_EMPLOYEE_LIST':
            return {
                ...state,
                employees: action.payload
            };

        case 'SET_NEW_EMPLOYEE':
            return {
                ...state,
                newEmployee: [...state.employees, action.payload]
            };

        case 'DELETE_COMPANY':
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            };

        case 'EDIT_COMPANY':
            return {
                ...state,
                companies: state.companies.map((company) => company.id === action.payload.id ? {...action.payload} : company)
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };

        case 'SET_TOTAL_EMPLOYEES_COUNT':
            return {
                ...state,
                totalCoCount: action.totalCoCount
            };

        default:
            return state;
    }
};

export default EmployeesReducer;