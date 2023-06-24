import React from "react";
import MovieCard from "./MovieCard";

export default function CardList({ movieList, handleSelectMovie }) {
  return (
    <div className="app container">
      {/* the row containing all movie cards */}
      <div className="movies-row mt-2 row g-5">
        {movieList.map((movie) => (
          <MovieCard
            handleSelectMovie={handleSelectMovie}
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
