import React from "react";
import ReactPaginate from "react-paginate";
export const Pagination = ({ pageNumber, setPageNumber, n }) => {
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <ReactPaginate
      previusLabel={"Previus"}
      nextLabel={"Next"}
      pageCount={n}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previusLinkClassName={"previusBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};
