import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Feature from "../components/Feature/Feature";
import News from "../components/News/News";
import Quotes from "../components/Quotes/Quotes";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Feature />
      <Quotes />
      <News />
    </>
  );
}

export default Home;
