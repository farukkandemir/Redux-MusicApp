import {FaHome, FaHashtag} from "react-icons/fa";
import {MdOutlineMyLocation} from "react-icons/md";
import {IoIosPeople} from "react-icons/io";

export const navLinks = [
  {name: "Discover", icon: <FaHome />, route: "/"},
  {name: "Around You", icon: <MdOutlineMyLocation />, route: "/around"},
  {name: "Top Artists", icon: <IoIosPeople />, route: "/topArtists"},
  {name: "Top Charts", icon: <FaHashtag />, route: "/topCharts"},
];

export const genres = [
  {title: "Pop", value: "POP"},
  {title: "Hip-Hop", value: "HIP_HOP_RAP"},
  {title: "Dance", value: "DANCE"},
  {title: "Electronic", value: "ELECTRONIC"},
  {title: "Soul", value: "SOUL_RNB"},
  {title: "Alternative", value: "ALTERNATIVE"},
  {title: "Rock", value: "ROCK"},
  {title: "Latin", value: "LATIN"},
  {title: "Film", value: "FILM_TV"},
  {title: "Country", value: "COUNTRY"},
  {title: "Worldwide", value: "WORLDWIDE"},
  {title: "Reggae", value: "REGGAE_DANCE_HALL"},
  {title: "House", value: "HOUSE"},
  {title: "K-Pop", value: "K_POP"},
];
