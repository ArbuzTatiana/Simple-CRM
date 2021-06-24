import React from 'react';
import '../../App.css';
import CompaniesList from '../Components/Company/CompaniesList';
import CompanyContextProvider from './../Contexts/CompanyContext';

const Companies = () => {
    return (
        <div className="tableWrap">
            <CompanyContextProvider>
                <CompaniesList/>
            </CompanyContextProvider>
        </div>
    )
};

export default Companies;