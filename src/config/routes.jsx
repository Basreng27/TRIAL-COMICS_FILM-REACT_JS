import React from "react";

const Dashboard = React.lazy(()=>import("../views/dashboard/Index"))
const Manhua = React.lazy(()=>import("../views/komik/manhwa/Index"))
const Manga = React.lazy(()=>import("../views/komik/manga/Index"))
const Manhwa = React.lazy(()=>import("../views/komik/manhwa/Index"))
const Movie = React.lazy(()=>import("../views/film/movie/Index"))
const Series = React.lazy(()=>import("../views/film/series/Index"))

const routes = [
    {path:"/", exact: true, name: "Dashboard" },
    {path:"/dashboard", name: "Dashboard", element: Dashboard},

    {path:"/komik", exact: true, name: "Komik" },
    {path:"/komik/manhua", name: "Manhua", element: Manhua},
    {path:"/komik/manga", name: "Manga", element: Manga},
    {path:"/komik/manhwa", name: "Manhwa", element: Manhwa},

    {path:"/film", exact: true, name: "Film" },
    {path:"/film/movie", name: "Movie", element: Movie},
    {path:"/film/series", name: "Series", element: Series},
]

export default routes;