import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/employees'
});

export const updateAPI = {
    getEmployeesList() {
        return instance.get(``)
            .then(response => {
                return response.data
            })
    },
};

export const employeesAPI = {

    getEmployees(currentPage) {
        return instance.get(`?page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },

    addEmployee(newEmployee) {
        return instance.post('', newEmployee)
            .then(response => {
                return response.data
            })
    },

    deleteEmployee(id) {
        return instance.delete(`/${id}`)
            .then(response => {
                return response.data
            })
    },

    updateEmployee(id, updatedEmployee) {
        updatedEmployee.append("_method", "put");
        return instance.post(`/${id}`, updatedEmployee)
            .then(response => {
                return response.data
            })
    },

};
