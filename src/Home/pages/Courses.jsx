"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Courses = () => {
  const coursesData = [
    {
      title: "Robotic Automation",
      img: "https://img.freepik.com/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061710.jpg",
      description: "Learn automation with cutting-edge robotics.",
    },
    {
      title: "AI For Conversation",
      img: "https://img.freepik.com/free-photo/close-up-making-robots_23-2148863357.jpg?t=st=1744174607~exp=1744178207~hmac=de2cd315cb9b3204aad488d2d28884768189d523177715955a8f48cd951bb48d&w=740",
      description: "Design smart chatbots and virtual assistants.",
    },
    {
      title: "Machine Learning",
      img: "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-robot_23-2151008310.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740",
      description: "Explore supervised and unsupervised ML models.",
    },
    {
      title: "Cyber Security",
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
      description: "Protect systems and data using AI-driven methods.Protect systems and data using AI-driven methods.Protect systems and data using AI-driven methods.",
    },
  ];

  return (
    <section id="courses">
      <div className="bg-white py-16 px-4  pt-10 lg:px-[8vw]">
        <div className="text-center mb-12">
          <p className="text-3xl font-bold font-title text-[#425DAC]  mt-2 relative pb-2">
            {" "}
            OUR COURSES <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[12%]  h-[3px] bg-[#425DAC] rounded-full"></span>
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="!pb-10"
        >
          {coursesData.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <img src={course.img} alt={course.title} className="w-full h-[450px] object-cover" />

                {/* Always visible title at bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-black/40 px-4 py-3 z-10">
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                </div>

                {/* Hover overlay full width */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-[-100%] group-hover:bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 group-hover:translate-y-1/2 transition-all duration-500 ease-in-out  items-center w-full px-4">
                    {/* <h3 className="text-xl font-semibold text-[#54B685] mb-2">{course.title}</h3> */}
                    <p className="text-sm font-bold text-white max-w-[80%] mx-auto">{course.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
