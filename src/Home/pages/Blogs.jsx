import React from "react";
import { ICON_HELPER } from "../../helper/iconHelper";

const Blogs = () => {
  return (
    <div className="bg-[#33467f] text-white min-h-fit flex items-center justify-between px-10 py-20 flex-col md:flex-row gap-10">
      {/* Left Section */}
      <div className="w-full space-y-6 text-center md:text-left px-[8vw]">
        <h1 className="text-xl md:text-4xl font-bold leading-snug">
          Unleash thePower of AI in <span className="text-primary"> Web</span> &<br />
          <span className="text-primary">Business</span>
        </h1>
        <p className="text-gray-300"> Step into the AI Robotics Arena — where intelligence meets innovation. Explore the future of robotics through immersive challenges, collaborative projects, and hands-on experiences.</p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg w-full border border-primary  shadow-md">
            <ICON_HELPER.BRAIN_ICON className="text-5xl sm:text-6xl md:text-8xl " />
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg sm:text-xl">AI Robotics Arena</h4>
              <p className="text-sm text-white sm:max-w-md">Push the boundaries of what's possible with AI-powered robotics</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg w-full border border-primary  shadow-md">
            <ICON_HELPER.ROBOT_ICON className="text-5xl sm:text-6xl md:text-8xl " />
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg sm:text-xl">AI Robotics Arena</h4>
              <p className="text-sm text-white sm:max-w-md">Gain real-world experience in automation, sensor integration, and machine learning.</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="bg-primary text-white font-semibold px-6 py-3 rounded mt-4 hover:bg-orange-600 transition">Get Started Now →</button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src="https://html.tonatheme.com/2024/intelytech/images/resource/robot-hand.png" alt="Robot Hand" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default Blogs;
