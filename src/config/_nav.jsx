  import React from "react";
  import { FaBook, FaFilm } from 'react-icons/fa';

const _nav = [
    {
      type: "NavItem",
      name: "Dashboard",
      to: "/dashboard",
      icon: <FaBook className="sidebar-icon" />,
      badge: {
        color: "info",
        text: "NEW",
      },
    },
    {
      type: "NavGroup",
      name: "Komik",
      to: "/komik",
      icon: <FaBook className="sidebar-icon" />,
      items: [
        {
          type: "NavItem",
          name: "Manhwa",
          to: "/komik/manhwa",
        },
        {
          type: "NavItem",
          name: "Manhua",
          to: "/komik/manhua",
        },
        {
          type: "NavItem",
          name: "Manga",
          to: "/komik/manga",
        },
      ],
    },
    {
      type: "NavGroup",
      name: "Film",
      to: "/film",
      icon: <FaFilm className="sidebar-icon" />,
      items: [
        {
          type: "NavItem",
          name: "Movie",
          to: "/film/movie",
        },
        {
          type: "NavItem",
          name: "Series",
          to: "/film/series",
        },
      ],
    },
  ];
  
  export default _nav;
  