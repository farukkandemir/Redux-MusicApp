import React from "react";
import {useGetChartsQuery} from "../api/musicApi";
import ArtistCard from "../components/ArtistCard";

function TopArtists() {
  const {data, isFetching} = useGetChartsQuery();

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Top Artists </h2>
      </div>
      <div className=" flex flex-wrap gap-4 mt-8">
        {data?.map((song) => (
          <ArtistCard key={song.key} song={song} />
        ))}
      </div>
    </>
  );
}

export default TopArtists;
