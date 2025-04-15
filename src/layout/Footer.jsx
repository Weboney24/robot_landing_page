import React from "react";
import { ICON_HELPER } from "../helper/iconHelper";
import { Image_Helper } from "../helper/imageHelper";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons_footer = [
    {
      id: "1",
      icons: <ICON_HELPER.PHONE_ICON className=" w-6 h-6" />,
      title: "Contact",
      content: "78712-04001",
    },
    {
      id: "2",
      icons: <ICON_HELPER.MAIL_ICON className=" w-6 h-6" />,
      title: "Email Address",
      content: "vpkumar2209@gmail.com",
    },
    {
      id: "3",
      icons: <ICON_HELPER.TIME_ICON className=" w-6 h-6" />,
      title: "Office Timing",
      content: "10:00AM to 7:00PM (Mon - sun)",
    },
    {
      id: "4",
      icons: <ICON_HELPER.LOCATION_ICON className=" w-6 h-6" />,
      title: "Our Location",
      content: "2nd Floor ,Ashoka Tower ,opp to Ajantha Theatre,Karur",
    },
  ];

  const quick_links = [
    { id: "1", name: "About Us", link: "#about" },
    { id: "2", name: "Coruses", link: "#courses" },
    { id: "3", name: "Gallery", link: "#gallery" },
    // { id: "4", name: "Blog", link: "#blog" },
    { id: "5", name: "Contact", link: "#contact" },
  ];

  const solutions = [
    { id: "1", name: "Robotic Automation" },
    { id: "2", name: "AI For Conversation" },
    { id: "3", name: "Machine Learning" },
  ];

  return (
    <div>
      <div className="bg-secondary text-[#425DAC] py-6 px-[8vw] mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center md:text-left border-b border-white pb-4">
          {icons_footer.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-2 md:p-4 p-3 rounded-lg   transition duration-200">
              <div className="p-4 rounded-lg border border-primary text-white flex justify-center items-center">{item.icons}</div>
              <div>
                <p className="text-sm text-gray-300">{item.title}</p>
                <p className="font-semibold text-sm text-white">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-6 ">
          <div className="md:flex-col flex space-y-5">
            <img src={Image_Helper.FOOTER_LOGO} alt="Logo" className="w-[200px]  h-20 mb-3 bg-white" />
            <p className="text-white text-sm w-60 font-semibold md:block hidden">We’re passionate about empowering minds through robotics and AI. From beginner to advanced, our courses and communities help you grow.</p>
            <div className="hidden md:flex gap-3 mt-3">
              <ICON_HELPER.FACEBOOK_ICON className="w-5 h-5 text-white hover:text-primary cursor-pointer" />
              <ICON_HELPER.TWITTER_ICON className="w-5 h-5 text-white hover:text-primary cursor-pointer" />
              <ICON_HELPER.YOUTUBE_ICON className="w-5 h-5 text-white hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h2 className="text-primary text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-white font-semibold cursor-pointer">
              {quick_links.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:text-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-primary text-lg font-semibold mb-3">Courses</h2>
            <ul className="space-y-2 text-white font-semibold">
              {solutions.map((item) => (
                <li key={item.id} className="hover:text-primary cursor-pointer">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="cursor-pointer">
            <h2 className="text-primary text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-white flex items-center gap-2">
              <ICON_HELPER.LOCATION_ICON className="w-8 h-8 text-primary font-semibold" />
              2nd Floor ,Ashoka Tower ,opp to Ajantha Theatre ,Karur
            </p>
            <p className="text-white flex items-center gap-2 mt-2">
              <ICON_HELPER.PHONE_ICON className="w-5 h-5 text-primary font-semibold" />
              78712-04001
            </p>
          </div>
        </div>

        <div className="text-center py-4 border-t border-white md:flex items-center justify-around flex-wrap">
          <div className="text-start">
            <h3 className="text-[#425DAC] text-sm font-semibold">Would Love To Be In Touch With You</h3>
            <h3 className="text-white md:text-3xl text-sm font-semibold">Would Love To Be In Touch With You</h3>
          </div>
          <div className="mt-4 flex  ">
            <input type="email" placeholder="Enter Your Email Address" className="bg-white text-[#425DAC] px-4 py-2 rounded-l-lg outline-none w-[350px] h-[60px]" />
            <button className="bg-primary px-8 py-2 rounded-r-lg hover:bg-[#425DAC] text-white">➜</button>
          </div>
        </div>
      </div>

      <div className="text-center text-white text-sm  p-5 bg-primary">
        © Developed By <span className="text-secondary font-semibold">Weboney</span> All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
