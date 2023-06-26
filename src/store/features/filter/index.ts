import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: null,
  selectedCinema: null,
  searchTitle: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedGenre: (state, {payload}) => {
      state.selectedGenre = payload;
    },
    setSelectedCinema: (state, {payload}) => {
      state.selectedCinema = payload;
    },
    setSearchTitle: (state, {payload}) => {
      state.searchTitle = payload;
    }
  }
});

export const { setSelectedGenre, setSelectedCinema, setSearchTitle } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
