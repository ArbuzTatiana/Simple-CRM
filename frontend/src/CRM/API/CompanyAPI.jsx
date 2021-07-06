import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/companies'
});

export const updateAPI = {
    getCompaniesList() {
        return instance.get(``)
            .then(response => {
                return response.data
            })
    },
};

export const companiesAPI = {
    getCompanies(currentPage) {
        return instance.get(`?page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    addCompany(id, name, email, phone_number, website, image) {
        return instance.post('', {id, name, email, phone_number, website, image})
            .then(response => {
                return response.data
            })
    }
};
