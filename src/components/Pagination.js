import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes  from "prop-types";
export const Pagination = ({ setPageNumber, n }) => {
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
      pageRangeDisplayed = {1}
      marginPagesDisplayed = {1}
    />//Componente de react paginate que permite hacer un paginado con un solo componente y enviarle todo por props
  );
};
Pagination.popTypes = {
  serPageNumber: PropTypes.func.isRequired,
  n : PropTypes.number.isRequired,
}