import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    mainMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addMovie: (state, action) => {
      state.mainMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer, addMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
