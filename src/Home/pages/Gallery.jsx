import React, { useState } from "react";

const categories = ["All", "Tech", "AI", "Robotics", "Science"];

const Gallery = () => {
  const allData = [
    { category: "Tech", title: "AI Model", image: "https://img.freepik.com/free-photo/father-sons-making-robot_23-2148863360.jpg" },
    { category: "AI", title: "Neural Networks", image: "https://img.freepik.com/free-photo/teens-doing-experiments-robotics-laboratory-boy-vr-headset-girl-protective-glasses_1268-23732.jpg?w=1380" },
    { category: "AI", title: "Fraud Detection", image: "https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137507.jpg?w=1380" },
    { category: "Science", title: "Data Science", image: "https://img.freepik.com/free-photo/father-sons-making-robot_23-2148863360.jpg" },
    { category: "Robotics", title: "AI Assistants", image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826" },
    { category: "Tech", title: "Futuristic Cars", image: "https://img.freepik.com/free-photo/father-sons-making-robot_23-2148863360.jpg" },
    { category: "Science", title: "Smart AI", image: "https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137507.jpg?w=1380" },
    { category: "AI", title: "Autonomous Tech", image: "https://img.freepik.com/free-photo/father-sons-making-robot_23-2148863360.jpg" },
    { category: "Robotics", title: "AI Humanoids", image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826" },
  ];

  const [filteredData, setFilteredData] = useState(allData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterGallery = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredData([...allData].sort(() => Math.random() - 0.5));
    } else {
      setFilteredData([...allData.filter((item) => item.category === category)].sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div className="bg-white py-10 px-[8vw]">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mt-2">Trending Gallery</h2>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mt-6 pb-3">
        {categories.map((category) => (
          <button key={category} onClick={() => filterGallery(category)} className={`text-lg font-semibold px-3 py-1 rounded-full transition-all duration-300 ${activeCategory === category ? "bg-[#54B685] text-white" : " text-black"}`}>
            {category}
          </button>
        ))}
      </div>

      {/* Compact Grid Gallery */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {filteredData.map((item, index) => (
          <div key={index} className="relative group cursor-pointer overflow-hidden ">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover  transition-transform duration-300 transform group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity">
              <h3 className="text-white text-sm font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
