const fetchMovies = (page) => async (dispatch) => {
  try {
    console.log("page", page);
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=" +
        page +
        "&sort_by=popularity.desc",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzgzZDBlZjJlMGYxOWE2ODhiNjFjMzFlYmQ1ZGE0NSIsInN1YiI6IjY0Nzc0NTIxODlkOTdmMDExNjJiMDU1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6AFGoZPD2gSyIesK36Si4gE8e7zlpkp-8KMI_RRXrhw`,
        },
      }
    );
    const data = await response.json();
    const movieList = data?.results || []; // Assuming the movies list is present in the "movies" property of the response data
    console.log("movieList", movieList);
    dispatch({ type: "SUCCESS", payload: movieList });
  } catch (error) {
    dispatch({ type: "FAIL", payload: error });
  }
};

export default fetchMovies;
