import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

export default function CardList() {
  const { movieList } = useSelector(({ moviesReducer }) => moviesReducer);
  return (
    <div className="app container">
      {/* the row containing all movie cards */}
      <div className="movies-row mt-2 row g-5">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
