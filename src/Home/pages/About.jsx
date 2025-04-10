import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="px-[8vw] py-16 bg-white md:pt-[150px]">
        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Image */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[500px]">
            <div className="w-[450px] h-[450px] rounded-xl shadow-xl relative overflow-visible">
              <img src="https://img.freepik.com/free-photo/view-futuristic-robot-school-environment_23-2151110144.jpg" alt="Main" className="w-full h-full object-cover" />
              <div className="absolute -bottom-[50px] md:-right-[50px] border-[10px] border-white text-white rounded-md flex items-center gap-2 shadow-md">
                <img src="https://img.freepik.com/free-photo/anthropomorphic-robot-performing-regular-human-job-future_23-2151043457.jpg" alt="Badge" className="w-[200px] h-[150px] object-cover" />
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold md:text-start text-center text-[#425DAC] font-title mb-6 relative pb-2">
              About Us
              <span className="absolute md:left-[60px] left-[130px] transform -translate-x-1/2 bottom-0 md:w-[15%]  w-[20%] h-[3px] bg-[#425DAC] rounded-full"></span>
            </h1>
            <p className="text-gray-700 mb-4">
              <strong>Robot PK Innovation</strong> is a dynamic training and innovation center, driven by the vision of <em>“Powering Innovation with Nature.”</em> The name PK stands for Power and Knowledge — two pillars that shape our mission to inspire and prepare the next generation of Young Scientists and Technologists.
            </p>
            <p className="text-gray-700 mb-4">With over 20 years of experience in the training industry, we are recognized for our expertise in CAD training and hands-on technology education.While CAD continues to be one of our core strengths, Robot PK Innovation is an independent center dedicated to equipping learners with the skills and mindset needed for tomorrow’s tech-driven world.</p>
            <p className="text-gray-700 mb-6"> We offer specialized STEM-based programs in Artificial Intelligence, Robotics, Coding, and Software Technologies, blending real-world relevance with creative exploration.</p>
            {/* <div className="flex flex-col gap-3 mb-6">
              {["Learn from top industry experts", "Build practical AI and ML solutions", "Master cutting-edge tools and technologies"].map((point, idx) => (
                <div key={idx} className="flex items-center text-gray-800">
                  <FaCheckCircle className="text-[#54B685] mr-2" />
                  <span>{point}</span>
                </div>
              ))}
            </div> */}
            <button className="bg-gradient-to-r from-blue-700 to-cyan-400 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 w-fit hover:opacity-90">
              Discover More
              <span className="inline-block transform rotate-[-45deg]">➜</span>
            </button>
          </div>
        </div>

        {/* Separate Bottom Row for Colleges & Schools */}
        <div className="mt-20 flex flex-col md:flex-row gap-8">
          {/* For Colleges */}
          <div className="bg-white p-6  shadow-md w-full md:w-1/2 hover:bg-primary hover:text-white">
            <h3 className="text-xl font-semibold text-[#425DAC] mb-2">🎓 For Colleges</h3>
            <p className=" text-sm">We collaborate with Engineering and Arts colleges to deliver industry-aligned training and placement support, helping students transition seamlessly from academics to professional careers.</p>
          </div>

          {/* For Schools */}
          <div className="bg-white p-6  shadow-md w-full md:w-1/2 hover:bg-secondary hover:text-white">
            <h3 className="text-xl font-semibold text-primary mb-2">🏫 For Schools</h3>
            <p className=" text-sm">We extend our programs to schools, offering STEM education from age 9. These courses introduce young learners to robotics, coding, and critical thinking — laying the foundation for a scientific future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
