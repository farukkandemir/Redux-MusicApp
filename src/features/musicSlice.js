import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  genreChoice: "",
};

export const musicSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genreChoice = action.payload;
    },
  },
});

export const {changeGenre} = musicSlice.actions;

export default musicSlice.reducer;
