import React from "react";

export default function Stats({ movieList, page }) {
  // top item calculation from original movielist state
  const topRatedItem = (movieList) => {
    var tempTopRating = 0;
    var topItem = null;

    for (let i = 0; i < movieList.length; i++) {
      if (tempTopRating <= movieList[i].vote_average) {
        tempTopRating = movieList[i].vote_average;
        topItem = movieList[i];
      }
    }

    return topItem;
  };

  const topMovie = topRatedItem(movieList);

  return (
    <div className="container">
      <p>Current Page: {page}</p>
      <p>Number of movies: {movieList.length}</p>
      <p>Top rated movie: {topMovie?.title} </p>
      <p>Rating: {topMovie?.vote_average}</p>
    </div>
  );
}
