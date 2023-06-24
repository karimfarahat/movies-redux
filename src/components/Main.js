import { useDispatch, useSelector } from "react-redux";
import Header from ".//Header";
import CardList from "./CardList";
import Footer from "./Footer";
import MyModal from "./MyModal";
import Stats from "./Stats";
import { useEffect, useState } from "react";
import fetchMovies from "../store/movies/movies.actions";

function Main() {
  const dispatch = useDispatch();
  const { page } = useSelector(({ moviesReducer }) => moviesReducer);

  useEffect(() => {
    // Fetch movies from API
    // and update the component state
    dispatch(fetchMovies(page));
    console.log(page);
  }, [page]);

  return (
    <div className="container-fluid">
      <Header />
      <Stats />

      <MyModal />

      <CardList />
      <Footer />
    </div>
  );
}

export default Main;
