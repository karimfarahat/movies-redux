const initialState = {
  status: "idle",
  movieList: [],
  error: null,
  selectedMovie: null,
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        status: "Pending",
      };

    case "SUCCESS":
      return {
        ...state,
        status: "Succeeded",
        movieList: action.payload,
      };

    case "FAIL":
      return {
        ...state,
        status: action.payload,
        // status: "Fail",
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    case "SELECT_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "UNSELECT_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    //3ashan law had dispatch action msh mawgood
    default:
      return state;
  }
};

export default moviesReducer;
