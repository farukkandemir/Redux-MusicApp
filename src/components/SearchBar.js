import React from "react";
import {BsSearch} from "react-icons/bs";

function SearchBar() {
  return (
    <article>
      <form action="">
        <div className="flex items-center py-4 text-gray-400 gap-2 ">
          <BsSearch />
          <input
            type="text"
            placeholder="Search ... "
            className=" border-none outline-none bg-white/5 "
          />
        </div>
      </form>
    </article>
  );
}

export default SearchBar;
