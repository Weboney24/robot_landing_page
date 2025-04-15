import React from "react";
import { Image_Helper } from "../../helper/imageHelper";

const Courses = () => {
  const coursesData = [
    {
      title: "STEM Explorers  (Ages: 9–10)",
      age: "Foundation for Young Minds",
      img: Image_Helper.core1,
      description: "A playful, hands-on intro to STEM with basic robotics, simple coding, and real-world problem solving through fun activities.",
      focus: "Creativity, Curiosity, Logic Building",
    },
    {
      title: "STEM Innovation Level",
      age: "Create & Experiment",
      img: Image_Helper.core2,
      description: "Step into robot building, block-based coding, and design thinking with mini-projects solving real-life challenges.",
      focus: "Beginner Robotics, Coding Logic, Teamwork",
    },
    {
      title: "STEM Pioneers Level",
      age: "Advanced Thinking, Real-World Impact",
      img: Image_Helper.core3,
      description: "Transition into advanced programming, AI basics & sensors. Build prototypes and join innovation challenges.",
      focus: "AI Concepts, Engineering Skills, Leadership",
    },
    {
      title: "STEM Masters Level",
      age: "Young Tech Leaders in the Making",
      img: Image_Helper.core4,
      description: "Capstone level: Build complex systems, explore machine learning & launch innovation projects for social impact.",
      focus: "Advanced Robotics, Innovation Labs, Project Mentorship",
    },
  ];

  return (
    <section className="px-4 md:px-[8vw] py-12 bg-white" id="courses">
      <div className="text-center">
        <h2 className="text-3xl font-bold mt-2 font-title text-[#425DAC] inline-block relative pb-2">
          Our Courses
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[80%] h-[3px] bg-[#425DAC]"></span>
        </h2>
      </div>

      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center mx-auto pt-6 gap-4 text-left">
        <div>
          <h2 className="text-xl font-bold text-gray-800 max-w-lg">At Robot PK Innovation, our courses are thoughtfully designed to grow with the learner from curious young minds to confident innovators.</h2>
        </div>
        <p className="text-gray-500 max-w-md text-sm">We offer a progressive path that builds technical skills, creativity, and critical thinking at every stage.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coursesData.map((course, idx) => (
          <div key={idx} className="group border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white rounded-md w-full h-full">
            <img src={course.img} alt={course.title} className="w-full h-[180px] object-cover" />
            <div className="p-3 flex flex-col justify-between h-[200px]">
              <div>
                <h3 className="text-lg  font-semibold text-black font-title">{course.title}</h3>
                <p className="text-xs font-bold text-[#4A6CF7] mb-1">{course.age}</p>
                <p className="text-[13px] text-gray-600 mt-4 font-semibold">{course.description}</p>
              </div>
              <p className="text-[11px] text-black font-bold italic">
                🔍 <span className="font-semibold">Focus:</span> {course.focus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
