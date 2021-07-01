import React, {useState} from 'react';
import './../../App.css';
import {Pagination} from "react-bootstrap";

let Paginator = ({pageSize, totalCoCount, currentPage, portionSize = 15, onPageChanged}) => {


    let pagesCount = Math.ceil(totalCoCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <Pagination>
            {portionNumber > 1 &&
            <Pagination.Item onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}>Назад</Pagination.Item>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <Pagination.Item className={{active: currentPage === p}}
                                            key={p}
                                            onClick={(e) => {
                                                onPageChanged(p);
                                            }}>{p}</Pagination.Item>
                })}

            {portionCount > portionNumber &&
            <Pagination.Item onClick={() => {
                setPortionNumber(portionNumber + 1);
            }}>Вперед</Pagination.Item>}
        </Pagination>
    );

}

export default Paginator;