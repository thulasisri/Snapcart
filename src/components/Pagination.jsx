import React from "react";
import "./Pagination.css";

const Pagination = ({ total, currentPage, setCurrentPage, itemsPerPage }) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        ◀
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => handleClick(i + 1)}
          className={currentPage === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
        ▶
      </button>
    </div>
  );
};

export default Pagination;