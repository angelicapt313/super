import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
      >
        Prev
      </button>
      <span className="px-4 py-2">{currentPage} / {totalPages}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
