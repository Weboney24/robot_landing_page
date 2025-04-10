import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Courses = () => {
  const coursesData = [
    {
      title: "Artificial Intelligence",
      img: "https://img.freepik.com/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061710.jpg",
      description: "Learn automation with cutting-edge robotics.",
    },
    {
      title: "Robotics",
      img: "https://img.freepik.com/free-photo/close-up-making-robots_23-2148863357.jpg?t=st=1744174607~exp=1744178207~hmac=de2cd315cb9b3204aad488d2d28884768189d523177715955a8f48cd951bb48d&w=740",
      description: "Design smart chatbots and virtual assistants.",
    },
    {
      title: "Coding",
      img: "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-robot_23-2151008310.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740",
      description: "Explore supervised and unsupervised ML models.",
    },
    {
      title: "Software Technologies",
      img: "https://img.freepik.com/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329454.jpg?t=st=1744175211~exp=1744178811~hmac=567c61fe3ec6873f44fc83b67397b4d2dd536427d615f6189100a31a3a087442&w=740",
      description: "Protect systems and data using AI-driven methods.",
    },
    {
      title: "Robotics Applications",
      img: "https://img.freepik.com/free-photo/child-making-robot_23-2148863368.jpg?t=st=1744175258~exp=1744178858~hmac=ef344e95675b13a07d2470c039a3a49968fce761c8a176a40178936d555ac8a4&w=740",
      description: "Learn automation with cutting-edge robotics.",
    },
    {
      title: "Robot Automation Tech",
      img: "https://img.freepik.com/free-photo/technology-concept-with-futuristic-element_23-2151910957.jpg?t=st=1744175415~exp=1744179015~hmac=0702663c58d27d310a7704e39ce41f5aed89ffbd8d1d51909cbcbda5c97eb9d7&w=740",
      description: "Design smart chatbots and virtual assistants.",
    },
    {
      title: "Mechatronics",
      img: "https://img.freepik.com/free-photo/view-robot-tending-maintaining-gardens_23-2151803975.jpg?t=st=1744175464~exp=1744179064~hmac=ce369637ec6f496b320502f1c88e68d7af96f636878d15e293b3118126dae7aa&w=740",
      description: "Explore supervised and unsupervised ML models.",
    },
    {
      title: "Data Science",
      img: "https://img.freepik.com/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329453.jpg?t=st=1744175513~exp=1744179113~hmac=85c5e970557fc7e647d31b02e20a660bd9f2124964d9bcc2bcc19da18311b67e&w=740",
      description: "Protect systems and data using AI-driven methods.",
    },
  ];

  return (
    <section className="px-4 md:px-[8vw] py-12 bg-white" id="courses">
      <div className="text-center">
        <h2 className="text-3xl font-bold mt-2 font-title text-[#425DAC] inline-block relative pb-2">
          Courses
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[80%]  h-[3px] bg-[#425DAC] rounded-full"></span>
        </h2>
      </div>
      <div className=" mb-10 md:flex justify-between items-center pt-6">
        <div>
          <p className="text-sm text-[#4A6CF7] font-semibold mb-2">Learn AI, Transform the Future</p>
          <h2 className=" md:text-xl font-bold text-gray-800">
            Master AI with hands-on courses in Machine Learning <br /> & Robotics.
          </h2>
        </div>
        <div>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">We offer specialized STEM-based programs in Artificial Intelligence, Robotics, Coding, and Software Technologies, blending real-world relevance with creative exploration.</p>
        </div>{" "}
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {coursesData.map((course, idx) => (
          <SwiperSlide key={idx}>
            <div className="group">
              <img src={course.img} alt={course.title} className="rounded-md w-full h-[240px] object-cover" />
              <p className="text-sm text-black font-medium mt-4 capitalize">{course.description}</p>
              <h3 className="text-lg font-semibold text-secondary mt-1">{course.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Courses;
