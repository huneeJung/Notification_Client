import { useState,useEffect } from 'react';
import Pagination from "react-js-pagination";
import "./Paging.css";

function Paging(props){
    const pageSize = 10;
    const currentPage = props.currentPage;
    const totalPages = props.totalPages;
    const changePage = async (newPage) => {
        props.setCurrentPage(newPage);
    };
    return (
        <>
            <div className="pagination-container">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={totalPages*pageSize}
                    totalPages={totalPages}
                    pageRangeDisplayed={10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={changePage}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>
        </>
    )

}

export default Paging;