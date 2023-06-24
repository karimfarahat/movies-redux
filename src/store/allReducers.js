import { combineReducers } from "redux";
import moviesReducer from "./movies/movies.reducer";

const rootReducer = combineReducers({
  moviesReducer,
});

export default rootReducer;
