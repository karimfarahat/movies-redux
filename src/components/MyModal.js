import React from "react";
import { Modal } from "react-bootstrap";

export default function MyModal({ movie, handleUnselectMovie }) {
  console.log("mmmmmmmmmmmmmmmmmm", movie);
  return (
    <Modal show={movie} contentClassName="bg-transparent">
      <Modal.Header
        className="p-2"
        closeButton
        onClick={handleUnselectMovie}
        // onClick={() => {
        //   //   dispatch(unselectMovie());
        // }}
      ></Modal.Header>

      <Modal.Body className="bg-light p-0">
        <div className="container">
          <div className="row">
            <div className="col-5 p-0">
              <img
                className="img-fluid h-100"
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
            <div className="col-7">
              <div className="movie-modal d-flex flex-column p-3 gap-4">
                <div className="movie-title fs-4 fw-bold">{movie?.title}</div>
                <div className="movie-rating fs-5">
                  IMDB Rating: {movie?.vote_average}/10 ({movie?.vote_count}{" "}
                  votes)
                </div>
                <div className="movie-overview ">{movie?.overview}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    // <div
    //   className="border-0 show modal fade"
    //   id="exampleModal"
    //   tabIndex="-1"
    //   //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-lg border-0">
    //     <div className="modal-content border-0 bg-transparent">
    //       <div className="modal-header border-0">
    //         <button
    //           type="button"
    //           className="btn-close border-0"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div id="my-modal" className="modal-body p-0 bg-white">
    //         {/* template modal */}
    // <div className="container">
    //   <div className="row">
    //     <div className="col-5 p-0">
    //       <img
    //         className="img-fluid h-100"
    //         src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
    //       />
    //     </div>
    //     <div className="col-7">
    //       <div className="movie-modal d-flex flex-column p-3 gap-4">
    //         <div className="movie-title fs-4 fw-bold">
    //           {movie?.title}
    //         </div>
    //         <div className="movie-rating fs-5">
    //           IMDB Rating: {movie?.vote_average}/10 ({movie?.vote_count}
    //           votes)
    //         </div>
    //         <div className="movie-overview ">{movie?.overview}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //         {/* end temp modal */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
