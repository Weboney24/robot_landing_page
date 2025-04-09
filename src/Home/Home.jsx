import React from "react";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Courses from "./pages/Courses";

const Home = () => {
  return (
    <div className="font-secondary">
      <Hero />
      <About />
      <Courses />
      <Gallery />
      <Contact />
      <Blogs />
    </div>
  );
};

export default Home;
