import React from "react";
import unknown from "../assets/images/unknown.png";

function ArtistCard({song}) {
  return (
    <div className="bg-white/5 w-52 h-76 p-4 rounded-lg cursor-pointer">
      <div>
        <img src={song?.share?.avatar || unknown} alt="" />
      </div>

      <div className="py-4">
        <p>{song.subtitle}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
