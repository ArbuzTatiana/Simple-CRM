import React from 'react';
import '../../App.css';
import CompaniesList from '../Components/Company/CompaniesList';
import CompanyContext from '../Contexts/CompanyContext';

const Companies = () => {
    return (
        <div className="tableWrap">
            <CompanyContext>
                <CompaniesList/>
            </CompanyContext>
        </div>
    )
};

export default Companies;