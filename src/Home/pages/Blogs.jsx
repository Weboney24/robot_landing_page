import { Card } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blogs = () => {
  const blogs = [
    {
      id: "1",
      date: "30/09/2025",
      name: "Data Science",
      content: "ChatAI Prompts Have Taken Web Experience To Next Level",
      image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826",
    },
    {
      id: "2",
      date: "01/10/2025",
      name: "Machine Learning",
      content: "How ML Algorithms Are Revolutionizing Industries",
      image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826",
    },
    {
      id: "3",
      date: "02/10/2025",
      name: "Artificial Intelligence",
      content: "Understanding The Future Of AI In Everyday Life",
      image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826",
    },
    {
      id: "4",
      date: "03/10/2025",
      name: "Deep Learning",
      content: "Exploring the Power of Neural Networks",
      image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826",
    },
    {
      id: "5",
      date: "04/10/2025",
      name: "Cloud Computing",
      content: "How Cloud is Changing the Data Landscape",
      image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826",
    },
    {
      id: "6",
      date: "05/10/2025",
      name: "Cybersecurity",
      content: "Protecting Data in the Digital Age",
      image: "https://img.freepik.com/free-photo/woman-hanging-out-with-robot_23-2151112154.jpg?w=826",
    },
  ];

  return (
    <div className="px-[14vw]">
      <h1 className="text-2xl font-semibold mb-10 flex justify-center items-center">Latest Learning Insights & Updates</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, l: ".swiper-pagination" }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((res) => (
          <SwiperSlide key={res.id}>
            <Card className="w-full bg-white h-[400px] flex flex-col justify-between">
              <div className="p-4 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold bg-[#54B685] px-2 py-1 text-white rounded">{res.date}</span>
                  <span className="text-lg font-semibold text-[#425DAC]">{res.name}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800 mt-3 line-clamp-3">{res.content}</h2>
              </div>
              <div className="relative">
                <img src={res.image} alt={res.name} className="w-full h-[200px] object-cover" />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default Blogs;
