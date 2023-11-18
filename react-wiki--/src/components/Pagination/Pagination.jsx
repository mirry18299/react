
/*import React, { useState, useEffect } from "react";*/
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, updatePageNumber }) => {
    return (
<ReactPaginate
  className="pagination justify-content-center gap-4 my-4"
  nextLabel="Next"
  previousLabel="Prev"
  previousClassName="btn btn-primary"
  nextClassName="btn btn-primary"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  onPageChange={(data) => {
    console.log(data);
}}
  pageCount={info?.pages}
/>
);
 };

 export default Pagination;
/*let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };
const Pagination = ({ pageNumber, info, updatePageNumber }) => {}
return (
    <>
    <style jsx>
    {`
      a {
        color: white; text-decoration: none;
      }
      @media (max-width: 768px) {
        .pagination {font-size: 12px}
    
        .next,
        .prev {display: none}
      }
      @media (max-width: 768px) {
        .pagination {font-size: 14px}
      }
    `}
    </style>
    </>
    );

const Pagination = ({ pageNumber, setPageNumber }) => {
    let next = () => {
        setPageNumber((x)  => x + 1);
    };

    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber((x) => x - 1);
    };
    return(
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={prev} className="btn btn-primary">
                prev
            </button>
            <button onClick={prev} className="btn btn-primary">
                next
            </button>
        </div>
    );
};
export default Pagination;*/