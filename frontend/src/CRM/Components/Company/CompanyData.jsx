import React, {useContext} from 'react';
import {CompanyContext} from './../../Contexts/CompanyContext';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const CompanyData = ({company}) => {

    const {deleteCompany} = useContext(CompanyContext);

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
                    <button className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteCompany(company.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>


        </>

    )
}

export default CompanyData;
