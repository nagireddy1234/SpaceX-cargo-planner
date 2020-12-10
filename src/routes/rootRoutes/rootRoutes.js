import React from "react";
const Home = React.lazy(()=>import("../../views/home/Home"));

export const rootRoutes = [
    {path:'/', component: Home},
    {path:'/:companyName', component: Home}
]