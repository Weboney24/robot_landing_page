import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Image_Helper } from "../../helper/imageHelper";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#425DAC] relative">
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
                  <h1 className="text-white text-6xl font-bold capitalize">We Transform the Digital Landscape with AI Products</h1>
                  <p className="text-white text-xl font-bold">A diam sit vulputate eget ultricies magna. Velit augue quisque eget etddt tincidunt aenean ullamcorper convallis.</p>

                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <button className="font-bold text-xl px-6 py-3 rounded bg-orange-500 text-white">Get Started!</button>
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
                  <img src={Image_Helper.newrobo1} alt="Robot" className="w-[500px] h-auto bounce" />
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
                  <h1 className="text-white text-6xl font-bold capitalize">Revolutionize Web Experience with AI Products</h1>
                  <p className="text-white text-xl font-bold">A diam sit vulputate eget ultricies magna. Velit augue quisque eget etddt tincidunt aenean ullamcorper convallis.</p>

                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <button className="font-bold text-xl px-6 py-3 rounded bg-orange-500 text-white">Get Started!</button>
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
                  <img src={Image_Helper.robo2} alt="Robot 2" className="w-[300px] h-auto bounce" />
                  <div className="absolute bottom-0 right-0">
                    <img src={Image_Helper.minibanner2} alt="Mini Banner 3" className="w-[70px] h-[70px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
