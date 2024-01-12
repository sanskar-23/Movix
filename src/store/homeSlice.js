import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiconfiguration: (state, action) => {
      state.url = action.payload; // state here is basically the initialState
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiconfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
