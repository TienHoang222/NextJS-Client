import React, { useEffect, useState, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({
  total = 0,
  itemsPerPage = 7,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        // <div className="number-page" id="number-page">
        <Pagination.Item
          key={i}
          className="logs__paging-button"
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
        // </div>
      );
    }

    return pages;
  }, [totalPages, currentPage]);

  if (totalPages === 0) return null;

  return (
    <Pagination style={{ display: "flex", listStyle: "none" }}>
      <Pagination.Prev
        className={
          currentPage === 1
            ? "btn-prev logs__paging-nav-button btn-disabled "
            : "btn-prev logs__paging-nav-button "
        }
        onClick={() => onPageChange(currentPage - 1)}
        // disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        className={
          currentPage === totalPages
            ? "btn-next logs__paging-nav-button btn-disabled "
            : "btn-next logs__paging-nav-button "
        }
        onClick={() => onPageChange(currentPage + 1)}
        // disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;
