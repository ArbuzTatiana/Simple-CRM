import React, {useContext, useState} from 'react';
import CompanyData from './CompanyData';
import {Table, Row, Container, Button, Modal} from 'react-bootstrap';
import {CompanyContext} from './../../Contexts/CompanyContext';
import AddCompany from './AddCompany';


const CompaniesList = () => {

    const {companies} = useContext(CompanyContext);

    return (
        <div className="wrap">
            <Container fluid>
                <div className="table-title">
                    <Row>
                        <div className="col-sm-6">
                            <h2>Manage <b>Companies</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <Button className="btn btn-success" data-toggle="modal">
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
                </Row>
            </Container>
        </div>
    )
};

export default CompaniesList;
