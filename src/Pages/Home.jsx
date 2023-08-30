import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import CerclesItem from "../Components/CerclesItem";
import "./Home.css";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="cercles">
        <CerclesItem />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
