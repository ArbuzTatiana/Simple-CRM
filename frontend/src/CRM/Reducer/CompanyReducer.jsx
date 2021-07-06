export const SET_COMPANY_LIST = 'SET_COMPANY_LIST';
const SET_NEW_COMPANY = 'SET_NEW_COMPANY';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COMPANIES_COUNT = 'SET_TOTAL_COMPANIES_COUNT';

export const initialState = {
    companies: [],
    pageSize: 15,
    totalCoCount: 0,
    currentPage: 1,
};

const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMPANY_LIST':
            return {
                ...state,
                companies: action.payload
            };

        case 'SET_NEW_COMPANY':
            return {
                ...state,
                newCompany: [...state.companies, action.payload]
            };

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };

        case 'SET_TOTAL_COMPANIES_COUNT':
            return {
                ...state,
                totalCoCount: action.totalCoCount
            };

        default:
            return state;
    }
};

export default CompanyReducer;