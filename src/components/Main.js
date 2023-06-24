import Header from ".//Header";
import CardList from "./CardList";
import Footer from "./Footer";
import MyModal from "./MyModal";
import Stats from "./Stats";
import { useEffect, useState } from "react";

function Main() {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (e) => {
    setSelectedMovie(
      movieList.filter(
        (movie) => movie.id === parseInt(e.currentTarget.firstChild.id)
      )[0]
    );
  };
  const handleUnselectMovie = () => {
    setSelectedMovie(null);
  };

  const handlePageNext = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePagePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    // Fetch jobs from API
    // and update the component state
    fetchJobs(page);
    console.log(page);
  }, [page]);

  const fetchJobs = async (page) => {
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
      console.log("data", data);
      const movieList = data?.results || []; // Assuming the jobs list is present in the "jobs" property of the response data
      console.log("movieList", movieList);
      setMovieList(movieList);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  return (
    <div className="container-fluid">
      <Header />
      <Stats movieList={movieList} page={page} />

      <MyModal
        movie={selectedMovie}
        handleUnselectMovie={handleUnselectMovie}
      />

      <CardList movieList={movieList} handleSelectMovie={handleSelectMovie} />
      <Footer
        page={page}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
      />
    </div>
  );
}

export default Main;
