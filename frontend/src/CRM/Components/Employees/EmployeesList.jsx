import React, {useContext, useState, useEffect} from 'react';
import {Table, Row, Container, Button, Modal} from 'react-bootstrap';
import {EmployeesContext} from '../../Contexts/EmployeesContext';
import EmployeesData from '../../Components/Employees/EmployeeData';
import Paginator from "../Paginator";

const EmployeesList = () => {

    const employeeState = useContext(EmployeesContext);
    const {employees, requestEmployees, pageSize, totalCoCount, currentPage} = employeeState;

    // console.log(employees)

    useEffect(() => {
        if (employees.length === 0) {
            requestEmployees()
        }
    }, [requestEmployees, currentPage])

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    let onPageChanged = (pageNumber) => {
        requestEmployees(pageNumber)
    };
    useEffect(() => {
        handleClose()
    }, [employees]);

    return (
        <div className="wrap">
            <Container fluid>
                <div className="table-title">
                    <Row>
                        <div className="col-sm-6">
                            <h2>Manage <b>Employees</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">
                                <span>Add Employee</span></Button>
                        </div>
                    </Row>
                </div>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            employees.map(employee => (
                                    <tr key={employee.id}>
                                            <EmployeesData employee={employee}/>
                                    </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Company</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Privet
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close button
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>

                <Row>
                    <Paginator pageSize={pageSize}
                               totalCoCount={totalCoCount}
                               currentPage={currentPage}
                               onPageChanged={onPageChanged}/>
                </Row>
            </Container>
        </div>
    )
};

export default EmployeesList;
