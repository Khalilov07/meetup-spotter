import React from "react";

import TourItems from "../Tour/TourItems";
import MainBanner from "./MainBanner";
import TourBanner from "./TourBanner";
import Tracks from "../Trakcs/Tracks";

const Home = () => {
  return (
    <main className="main">
      <MainBanner />
      <TourItems />
      <TourBanner />
      <Tracks />
    </main>
  );
};

export default Home;
