import React from "react";

function SongCard({song}) {
  return (
    <article className="bg-white/5 w-52 h-76 p-4 rounded-lg cursor-pointer">
      <div className="hover:opacity-60">
        <img src={song?.images?.coverart} alt="cover" className="rounded-lg" />
      </div>

      <div className="mt-4 text-sm">
        <p>{song.title}</p>
        <p className="mt-2 text-gray-400">{song.subtitle}</p>
      </div>
    </article>
  );
}

export default SongCard;
