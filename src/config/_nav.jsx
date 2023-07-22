import React from "react";
import { FaBook, FaFilm } from "react-icons/fa";

const _nav = [
  {
    type: "NavItem",
    name: "Dashboard",
    to: "/app/dashboard",
    icon: <FaBook className="sidebar-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    type: "NavGroup",
    name: "Komik",
    to: "/app/komik",
    icon: <FaBook className="sidebar-icon" />,
    items: [
      {
        type: "NavItem",
        name: "Manhwa",
        to: "/app/komik/manhwa",
      },
      {
        type: "NavItem",
        name: "Manhua",
        to: "/app/komik/manhua",
      },
      {
        type: "NavItem",
        name: "Manga",
        to: "/app/komik/manga",
      },
    ],
  },
  {
    type: "NavGroup",
    name: "Film",
    to: "/app/film",
    icon: <FaFilm className="sidebar-icon" />,
    items: [
      {
        type: "NavItem",
        name: "Movie",
        to: "/app/film/movie",
      },
      {
        type: "NavItem",
        name: "Series",
        to: "/app/film/series",
      },
    ],
  },
];

export default _nav;
