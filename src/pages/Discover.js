import React from "react";
import {useGetSongsByGenreQuery} from "../api/musicApi";
import SongCard from "../components/SongCard";
import {genres} from "../assets/constant";
import {useDispatch, useSelector} from "react-redux";
import {changeGenre} from "../features/musicSlice";

function Discover() {
  const dispatch = useDispatch();

  const {genreChoice} = useSelector((state) => state.musicPlayer);

  const {data, isFetching, currentData} = useGetSongsByGenreQuery(genreChoice || "POP");

  if (isFetching && !currentData) return "Loading..";

  return (
    <div>
      <div className="mt-4 flex justify-between">
        <h2 className="text-2xl font-bold">Discover {genreChoice} </h2>
        <select
          className="bg-black border-none outline-none"
          value={genreChoice || "Pop"}
          onChange={(e) => dispatch(changeGenre(e.target.value))}
        >
          {genres.map((genre, index) => (
            <option key={genre.title} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="h-full flex flex-wrap gap-4 mt-8">
        {data?.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
