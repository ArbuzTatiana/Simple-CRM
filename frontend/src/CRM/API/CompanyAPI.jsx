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

    addCompany(newCompany) {
        return instance.post('', newCompany, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },

    deleteCompany(id) {
        return instance.delete(`/${id}`)
            .then(response => {
                return response.data
            })
    },

    updateCompany(id, updatedCompany) {
        updatedCompany.append("_method", "put");
        return instance.post(`/${id}`, updatedCompany, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },
};
