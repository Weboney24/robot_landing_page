import React from "react";

const Courses = () => {
  const coursesData = [
    {
      title: "STEM Explorers  (Ages: 9–10)",
      age: "Foundation for Young Minds",
      img: "https://img.freepik.com/free-photo/four-kids-building-drone-using-electronic-parts_23-2149357694.jpg?t=st=1744702361~exp=1744705961~hmac=3550765f0b9a615dc4b627f4cfd7ad57b0c61da323238d7e77007cd5169d25a4&w=1380",
      description: "A playful, hands-on intro to STEM with basic robotics, simple coding, and real-world problem solving through fun activities.",
      focus: "Creativity, Curiosity, Logic Building",
    },
    {
      title: "Innovation Level",
      age: "Create & Experiment",
      img: " https://img.freepik.com/free-photo/father-sons-making-robot_23-2148863415.jpg?t=st=1744702523~exp=1744706123~hmac=4b4aa80b5625314ff3b4237c23f1b7203a24fc5dde88327124c14ae04087f89e&w=1380",
      description: "Step into robot building, block-based coding, and design thinking with mini-projects solving real-life challenges.",
      focus: "Beginner Robotics, Coding Logic, Teamwork",
    },
    {
      title: "Pioneers Level",
      age: "Advanced Thinking, Real-World Impact",
      img: "https://img.freepik.com/free-photo/two-girls-doing-science-experiments-together_23-2148778938.jpg?t=st=1744702639~exp=1744706239~hmac=99eb63facb52654477afe8cdae3256ad3e5c4e9422129ee506e0de017a36a7c8&w=1380",
      description: "Transition into advanced programming, AI basics & sensors. Build prototypes and join innovation challenges.",
      focus: "AI Concepts, Engineering Skills, Leadership",
    },
    {
      title: "Masters Level",
      age: "Young Tech Leaders in the Making",
      img: " https://img.freepik.com/free-photo/group-young-people-doing-experiments-robotics-laboratory-robot-tools-table_1268-23390.jpg?t=st=1744702728~exp=1744706328~hmac=795aad85d622720bf05e462b1f6972beb7b0a0eb950b404e5d5b2d8c8a12fb1d&w=1380",
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
          <p className="text-sm text-[#4A6CF7] font-semibold mb-1">From Curiosity to Creation</p>
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
