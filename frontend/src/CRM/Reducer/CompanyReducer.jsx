export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const initialState = {
    companies: [],
    pageSize: 15,
    totalCoCount: 0,
    currentPage: 1,
};

const CompanyReducer = (state, action) => {
    switch (action.type){
        case 'SET_COMPANY_LIST':
            return {
                ...state,
                companies: action.companies
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