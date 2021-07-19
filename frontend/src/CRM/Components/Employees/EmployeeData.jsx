import React, {useContext, useState, useEffect} from 'react';
import './../../../App.css';
import {EmployeesContext} from './../../Contexts/EmployeesContext';
import {OverlayTrigger, Tooltip, Modal, Button} from 'react-bootstrap';
import EditEmployees from './../Employees/EditEmployees';

const EmployeeData = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeesContext);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [employee]);


    return (
        <>
            <td>{employee.id}</td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee?.company?.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone_number}</td>

            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i
                        className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act"
                            data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEmployees theEmployees={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close button
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )
};

export default EmployeeData;
