import React, {useContext, useState, useEffect} from 'react';
import {CompanyContext} from './../../Contexts/CompanyContext';
import {OverlayTrigger, Tooltip, Modal, Button} from 'react-bootstrap';
import EditCompany from './EditCompany';

const CompanyData = ({company}) => {

    const {deleteCompany} = useContext(CompanyContext);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [company]);

    return (
        <>
            <td>{company.id}</td>
            <td>{company.name}</td>
            <td>{company.email}</td>
            <td>{company.phone_number}</td>
            <td>{company.website}</td>
            <td>{company.image}</td>

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
                    <button onClick={() => deleteCompany(company.id)} className="btn text-danger btn-act"
                            data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCompany theCompanies={company}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close button
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default CompanyData;
