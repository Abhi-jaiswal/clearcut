import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import HeroSection0 from "../components/HeroSection0";

const Home = () => {
  return (
  <div className="bg-[#18181C]">
    <HeroSection0/>
    <HeroSection/>
    <Footer/>
  </div>
  );
};

export default Home;