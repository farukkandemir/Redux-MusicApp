import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://shazam-core.p.rapidapi.com/v1";

const headers = {
  "X-RapidAPI-Key": "4c988abb2cmsh8c5a2a37964c8afp1e96adjsn7e3048f6f758",
  "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
};

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({baseUrl, headers}),
  endpoints: (builder) => ({
    getCharts: builder.query({
      query: () => "/charts/world",
    }),
    getSongsByGenre: builder.query({
      query: (genreChoice) =>
        `/charts/genre-country?country_code=US&genre_code=${genreChoice}`,
    }),
  }),
});

export const {useGetChartsQuery, useGetSongsByGenreQuery} = musicApi;
