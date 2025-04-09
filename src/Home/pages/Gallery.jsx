import React, { useState } from "react";

const categories = ["All", "Tech", "AI", "Robotics", "Science"];

const Gallery = () => {
  const allData = [
    { category: "Tech", title: "AI Model", image: "https://img.freepik.com/free-photo/futuristic-robot-hummingbird_23-2151443807.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" },
    { category: "AI", title: "Neural Networks", image: "https://img.freepik.com/free-photo/view-robot-taking-care-garden_23-2151804039.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" },
    { category: "AI", title: "Fraud Detection", image: "https://img.freepik.com/free-photo/macro-robotic-insect_23-2150915952.jpg?t=st=1744178303~exp=1744181903~hmac=25b7ce2ec64a31a435e819220eec048f4a0e558cdcd41a032267275e74050b86&w=1380" },
    { category: "Science", title: "Data Science", image: "https://img.freepik.com/free-photo/father-sons-making-robot_23-2148863360.jpg" },
    { category: "Robotics", title: "AI Assistants", image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826" },
    { category: "Tech", title: "Futuristic Cars", image: "https://img.freepik.com/free-photo/boy-putting-shelf-robot_23-2148863364.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" },
    { category: "Science", title: "Smart AI", image: "https://img.freepik.com/free-photo/futuristic-robotic-hummingbird_23-2151443898.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" },
    { category: "AI", title: "Autonomous Tech", image: "https://img.freepik.com/free-photo/robot-style-car-with-joystick_140725-9002.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" },
    { category: "Robotics", title: "AI Humanoids", image: "https://img.freepik.com/free-photo/futuristic-robotic-arm-repairs-complex-circuit-board-generated-by-ai_188544-24546.jpg?t=st=1744178372~exp=1744181972~hmac=eaeec106bb3925e4f537288260a7491f4969ea1623ac91c6906e6215a986a155&w=1380" },
    { category: "Robotics", title: "Inavation", image: "https://img.freepik.com/free-photo/macro-robotic-insect_23-2150916126.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" },
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
    <section id="gallery">
      <div className="bg-white py-10 px-[8vw] pt-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-2 font-title text-[#425DAC] inline-block relative pb-2">
            Trending Gallery
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[80%]  h-[3px] bg-[#425DAC] rounded-full"></span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 pb-3 px-2">
          {categories.map((category) => (
            <button key={category} onClick={() => filterGallery(category)} className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeCategory === category ? "bg-[#54B685] text-white" : "bg-white text-black "}`}>
              {category}
            </button>
          ))}
        </div>

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
    </section>
  );
};

export default Gallery;
