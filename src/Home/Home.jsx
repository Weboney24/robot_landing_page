import React from "react";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Hero from "./pages/Hero";

const Home = () => {
  return (
    <div>
      <Hero />

      <Gallery />
      <Contact />
      <Blogs />
    </div>
  );
};

export default Home;
