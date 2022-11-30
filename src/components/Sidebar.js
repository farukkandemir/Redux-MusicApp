import React from "react";
import {GiMusicSpell} from "react-icons/gi";
import {Link} from "react-router-dom";
import {navLinks} from "../assets/constant";

function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 w-60 h-full bg-black text-gray-300 p-4">
      <div className="text-center flex gap-2">
        <GiMusicSpell size="2rem" color="red" />
        <h1 className="text-2xl">Moon Shard</h1>
      </div>

      <ul className="mt-8 pl-2">
        {navLinks.map((link, index) => (
          <Link to={link.route}>
            <li key={index} className="flex items-center gap-2 mt-4">
              <span className="text-lg">{link.icon}</span>
              <span className="text-lg">{link.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
