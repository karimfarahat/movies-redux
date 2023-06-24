import React from "react";
import { useDispatch } from "react-redux";

export default function MovieCard({ movie }) {
  const imgSrc = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const dispatch = useDispatch();
  //
  return (
    // card design and onclick
    <div
      className="col-md-3"
      onClick={(e) =>
        dispatch({
          type: "SELECT_MOVIE",

          payload: movie,
        })
      }
    >
      <div
        id={movie.id}
        className="card h-100 d-flex flex-column gap-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img className="img-fluid" src={imgSrc} />

        <div className="p-3 d-flex flex-column justify-content-around text-center align-items-center gap-4 h-100">
          <div className="fs-3 h-75">{movie.title}</div>
          <div className="fs-4 h-25">{movie.vote_average}</div>
        </div>
      </div>
    </div>
  );
}
