import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="px-[8vw] py-16 bg-white">
        <h1 className="text-3xl font-bold text-center text-[#425DAC] font-title mb-10 relative pb-2">
          About Us <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[8%]  h-[3px] bg-[#425DAC] rounded-full"></span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[500px]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full overflow-hidden border-[10px] border-white shadow-lg z-10">
              <img src="https://img.freepik.com/free-photo/view-futuristic-robot-school-environment_23-2151110144.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" alt="Main" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-[130px] md:block hidden left-[40px] w-[120px] h-[120px] rounded-full overflow-hidden border-[5px] border-white shadow-md z-20">
              <img src="https://img.freepik.com/free-photo/robot-with-digital-tablet_1048-12078.jpg?t=st=1744183241~exp=1744186841~hmac=02ce9af1c151042e1ac17f722cad391844b2217050a69f767f674ae91d4e4dd4&w=996" alt="Small 1" className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-0  md:block hidden left-[40px] w-[200px] h-[200px] rounded-full overflow-hidden border-[5px] border-white shadow-md z-20">
              <img src="https://img.freepik.com/free-photo/anthropomorphic-robot-performing-regular-human-job-future_23-2151043457.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_country_boost&w=740" alt="Small 2" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-primary font-primary mb-4 leading-snug">
              Empowering Future
              <br /> Innovators Through AI <br /> & Data Training
            </h2>
            <p className="text-gray-500 mb-6"> Our programs are crafted to equip you with hands-on skills, real-world projects, and expert mentorship</p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-4 mb-6">
              {["Learn from top industry experts", "Build practical AI and ML solutions", "Master cutting-edge tools and technologies"].map((point, idx) => (
                <div key={idx} className="flex items-center text-gray-800">
                  <FaCheckCircle className="text-[#54B685] mr-2" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-700 to-cyan-400 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 w-fit hover:opacity-90">
              Discover More
              <span className="inline-block transform rotate-[-45deg]">➜</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
