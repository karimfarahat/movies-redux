import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function MyModal() {
  // { movie, handleUnselectMovie }
  const dispatch = useDispatch();
  const { selectedMovie } = useSelector(({ moviesReducer }) => moviesReducer);
  return (
    // modal show if movie is not null
    <Modal show={selectedMovie} contentClassName="bg-transparent">
      <Modal.Header
        className="p-2"
        closeButton
        // onClick={handleUnselectMovie}
        onClick={() => {
          dispatch({ type: "UNSELECT_MOVIE", payload: null });
        }}
      ></Modal.Header>

      <Modal.Body className="bg-light p-0">
        <div className="container">
          <div className="row">
            <div className="col-5 p-0">
              <img
                className="img-fluid h-100"
                src={
                  "https://image.tmdb.org/t/p/w500" + selectedMovie?.poster_path
                }
              />
            </div>
            <div className="col-7">
              <div className="movie-modal d-flex flex-column p-3 gap-4">
                <div className="movie-title fs-4 fw-bold">
                  {selectedMovie?.title}
                </div>
                <div className="movie-rating fs-5">
                  IMDB Rating: {selectedMovie?.vote_average}/10 (
                  {selectedMovie?.vote_count} votes)
                </div>
                <div className="movie-overview ">{selectedMovie?.overview}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
