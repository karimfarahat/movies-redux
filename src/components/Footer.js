import React from "react";

export default function Footer({ page, handlePageNext, handlePagePrev }) {
  return (
    <div
      id="footer"
      className="p-3 d-flex justify-content-center align-items-center gap-3"
    >
      {page > 1 && (
        <button
          id="previous"
          onClick={handlePagePrev}
          className="btn btn-outline-secondary"
        >
          Previous
        </button>
      )}
      <button
        id="next"
        onClick={handlePageNext}
        className="btn btn-outline-secondary"
      >
        Next
      </button>
    </div>
  );
}
