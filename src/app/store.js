import {configureStore} from "@reduxjs/toolkit";
import {musicApi} from "../api/musicApi";
import musicReducer from "../features/musicSlice";

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    musicPlayer: musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});
