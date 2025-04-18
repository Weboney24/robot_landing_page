import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Image_Helper } from "../../helper/imageHelper";
import { ICON_HELPER } from "../../helper/iconHelper";

const Hero = () => {
  // Sample data (replace this with API response)
  const cardData = [
    {
      id: 1,
      icon: <ICON_HELPER.ROBOT_ICON />,
      title: "Robotics",
      description: "Explore the world of intelligent machines through hands-on robotics training",
    },
    {
      id: 2,
      icon: <ICON_HELPER.BRAIN_ICON />,
      title: " Coding",
      description: "Build the future with code! Learn programming fundamentals ",
    },
    {
      id: 3,
      icon: <ICON_HELPER.ANALAYS_ICON />,
      title: " Software Technologies",
      description: "Master modern software tools and technologies used in AI",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#33467f] relative">
      <div
        className="absolute w-1/2 h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${Image_Helper.background})`,
        }}
      ></div>

      <div
        className="absolute w-1/2 h-full bg-center bg-cover bg-no-repeat right-0"
        style={{
          backgroundImage: `url(${Image_Helper.background2})`,
        }}
      ></div>

      <div className="relative z-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-screen px-[8vw] py-10 flex items-center">
              <div className="w-full min-h-[500px] flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="w-full lg:w-[50%] h-full flex flex-col items-start gap-y-10">
                  <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize">Empowering Mind with Robotic Education</h1>
                  <p className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-bold">Dive into the world of AI-powered robotics, where creativity meets technology. These courses give you practical skills to build smart robots.</p>
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <a href="#contact">
                      <button className="font-bold text-xl px-6 py-3 rounded bg-primary text-white">Get Started!</button>
                    </a>{" "}
                    <button className="font-bold text-xl px-6 py-3 rounded bg-blue-500 text-white">Try Demo!</button>
                  </div>
                </div>

                <div className="w-full lg:w-[40%] h-full flex items-center justify-center relative">
                  <div className="absolute top-0 right-0">
                    <img src={Image_Helper.minibanner1} alt="Mini Banner 1" className="w-[70px] h-[70px] " />
                  </div>
                  <div className="absolute top-0 left-0">
                    <img src={Image_Helper.minibanner2} alt="Mini Banner 2" className="w-[70px] h-[70px] shake" />
                  </div>
                  <img src={Image_Helper.newrobo1} alt="Robot" className="w-[500px] h-auto bounce md:block hidden" />
                  <div className="absolute bottom-0 right-0">
                    <img src={Image_Helper.minibanner2} alt="Mini Banner 3" className="w-[70px] h-[70px] rotate-180 shake" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen px-[8vw] py-10 flex items-center">
              <div className="w-full min-h-[500px] flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="w-full lg:w-[50%] h-full flex flex-col items-start gap-y-10 relative">
                  <div className="absolute -top-20 -right-36">
                    <img src={Image_Helper.minibanner4} alt="Mini Banner 1" className="w-[80px] h-auto animate-pulse" />
                  </div>
                  <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold capitalize">Revolutionize Learning with Robotics Courses</h1>
                  <p className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-bold">These courses are tailored to help you design, develop, and control intelligent robotic systems that can perceive, learn, and adapt in real-world environments.</p>

                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <a href="#contact">
                      <button className="font-bold text-xl px-6 py-3 rounded bg-primary text-white">Get Started!</button>
                    </a>{" "}
                    <button className="font-bold text-xl px-6 py-3 rounded bg-blue-500 text-white">Try Demo!</button>
                  </div>

                  <div className="absolute -bottom-10 right-0 ">
                    <img src={Image_Helper.minibanner3} alt="Mini Banner 1" className="w-[100px] h-[100px] rotated" />
                  </div>
                </div>

                <div className="w-full lg:w-[40%] h-full flex items-center justify-center relative">
                  <div className="absolute top-0 right-0">
                    <img src={Image_Helper.minibanner1} alt="Mini Banner 1" className="w-[70px] h-[70px]" />
                  </div>
                  <img src={Image_Helper.robo2} alt="Robot 2" className="w-[300px] h-auto bounce md:block hidden" />
                  <div className="absolute bottom-0 right-0">
                    <img src={Image_Helper.minibanner2} alt="Mini Banner 3" className="w-[70px] h-[70px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full md:flex hidden justify-center -mt-18 relative z-20  ">
        <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cardData.map((res, index) => (
            <div key={index} className="bg-gray-50 p-6 flex items-center gap-4">
              <h1 className="text-5xl text-primary">{res.icon}</h1>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{res.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{res.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
