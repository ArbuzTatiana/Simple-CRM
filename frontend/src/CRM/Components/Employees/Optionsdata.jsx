import React from 'react';

const Optionsdata = ({employees}) => {

    return(
        <>
            <option>Select company</option>
            {
                employees.map(list =>
                    (
                        <option key={list.id} value={list?.company?.id}>
                            {list?.company?.name}
                        </option>
                    ))
            }
        </>
    )
}

export default Optionsdata;