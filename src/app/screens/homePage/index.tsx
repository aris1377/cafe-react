import React from "react";
import { Container } from "@mui/material"
import Statistics from "./Statistics";
// import NewDishes from "./NewDishes";
// import Events from "./Events";
// import ActiveUsers from "./ActiveUsers";
// import Advertisement from "./Advertisement";
// import PopularDishes from "./PopularDishes";
import "../../../css/home.css";

export default function HomePage() {
   return (
    <div className={"homepage"}>
      <Statistics />
      {/* <ActiveUsers />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events /> */}
    </div>
  );
}