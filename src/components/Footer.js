import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const { page } = useSelector(({ moviesReducer }) => moviesReducer);

  return (
    <div
      id="footer"
      className="p-3 d-flex justify-content-center align-items-center gap-3"
    >
      {page > 1 && (
        <button
          id="previous"
          onClick={() => {
            dispatch({ type: "PREV_PAGE", payload: page - 1 });
          }}
          className="btn btn-outline-secondary"
        >
          Previous
        </button>
      )}
      <button
        id="next"
        onClick={() => {
          dispatch({ type: "NEXT_PAGE", payload: page + 1 });
        }}
        className="btn btn-outline-secondary"
      >
        Next
      </button>
    </div>
  );
}
