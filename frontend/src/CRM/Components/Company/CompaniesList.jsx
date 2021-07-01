import React, {useContext, useState, useEffect} from 'react';
import CompanyData from './CompanyData';
import {Table, Row, Container, Button, Modal} from 'react-bootstrap';
import {CompanyContext} from '../../Contexts/CompanyContext';
import AddCompany from './AddCompany';
import Paginator from "../Paginator";


const CompaniesList = () => {

    const companyState = useContext(CompanyContext);
    const {companies, requestCompanies, pageSize, totalCoCount, currentPage} = companyState;

    useEffect(() => {
        let {currentPage} = companyState;
        if (companies.length === 0) {
            requestCompanies(currentPage);
        }
    }, [requestCompanies, currentPage]);

    let onPageChanged = (pageNumber) => {
        requestCompanies(pageNumber)
    };


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="wrap">
            <Container fluid>
                <div className="table-title">
                    <Row>
                        <div className="col-sm-6">
                            <h2>Manage <b>Companies</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">
                                <span>Add Company</span></Button>
                        </div>
                    </Row>
                </div>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Website</th>
                            <th>Logo</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            companies.map(company => (
                                <tr key={company.id}>
                                    <CompanyData company={company}/>
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
                            <AddCompany/>
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

export default CompaniesList;
