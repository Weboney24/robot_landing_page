import React from "react";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";

const Home = () => {
  return (
    <div>
      <Gallery />
      <Contact />
      <Blogs />
    </div>
  );
};

export default Home;
