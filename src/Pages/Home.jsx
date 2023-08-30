import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import CerclesItem from "../Components/CerclesItem";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="cercles">
        <CerclesItem />
      </div>
    </div>
  );
}

export default Home;
