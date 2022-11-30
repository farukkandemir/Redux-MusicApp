import React from "react";
import {useGetChartsQuery} from "../api/musicApi";
import SongCard from "../components/SongCard";

function TopCharts() {
  const {data, isFetching, currentData} = useGetChartsQuery();

  if (isFetching && !currentData) return "Loading....";

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Top Charts </h2>
      </div>
      <div className="h-full flex flex-wrap gap-4 mt-8">
        {data?.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}

export default TopCharts;
