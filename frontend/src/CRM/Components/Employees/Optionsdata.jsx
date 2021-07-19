import React from 'react';

const Optionsdata = ({employees}) => {

    return (
        <>
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