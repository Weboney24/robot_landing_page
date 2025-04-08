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
      content: "(950) 222 8687",
    },
    {
      id: "2",
      icons: <ICON_HELPER.MAIL_ICON className=" w-6 h-6" />,
      title: "Email Address",
      content: "intelyt@domain.com",
    },
    {
      id: "3",
      icons: <ICON_HELPER.TIME_ICON className=" w-6 h-6" />,
      title: "Office Timing",
      content: "9:00AM to 8:00PM (Mon - Friday)",
    },
    {
      id: "4",
      icons: <ICON_HELPER.LOCATION_ICON className=" w-6 h-6" />,
      title: "Our Location",
      content: "38 South Street, NY",
    },
  ];

  const quick_links = [
    { id: "1", name: "About Us", link: "#" },
    { id: "2", name: "Services", link: "#" },
    { id: "3", name: "Case Studies", link: "#" },
    { id: "4", name: "Contact", link: "#" },
    { id: "5", name: "Blog", link: "#" },
  ];

  const solutions = [
    { id: "1", name: "AI Data Visualization" },
    { id: "2", name: "AI Image Processing" },
    { id: "3", name: "Machine Learning" },
    { id: "4", name: "Robot Automation Tech" },
    { id: "5", name: "Language Processing" },
  ];

  return (
    <div>
      <div className="bg-[#54B685] text-[#425DAC] py-6 px-[8vw] mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center md:text-left border-b border-white pb-4">
          {icons_footer.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-2 md:p-4 p-3 rounded-lg   transition duration-200">
              <div className="p-4 rounded-lg border border-[#425DAC] text-[#425DAC] flex justify-center items-center">{item.icons}</div>
              <div>
                <p className="text-sm text-gray-300">{item.title}</p>
                <p className="font-semibold text-sm text-[#425DAC]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-6 ">
          <div className="md:flex-col flex space-y-5">
            <img src={Image_Helper.FOOTER_LOGO} alt="Logo" className="w-[200px]  h-20 mb-3 bg-white" />
            <p className="text-white text-sm w-60 font-semibold md:block hidden">At erat nisl sit a id sit tincidunt. Egestas lectus habitant integer luctus onto ipsum elementum quis sed gravida.</p>
            <div className="hidden md:flex gap-3 mt-3">
              <ICON_HELPER.FACEBOOK_ICON className="w-5 h-5 text-white hover:text-[#425DAC] cursor-pointer" />
              <ICON_HELPER.TWITTER_ICON className="w-5 h-5 text-white hover:text-[#425DAC] cursor-pointer" />
              <ICON_HELPER.YOUTUBE_ICON className="w-5 h-5 text-white hover:text-[#425DAC] cursor-pointer" />
            </div>
          </div>

          <div>
            <h2 className="text-[#425DAC] text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-white font-semibold">
              {quick_links.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="hover:text-[#425DAC]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[#425DAC] text-lg font-semibold mb-3">AI Solutions</h2>
            <ul className="space-y-2 text-white font-semibold">
              {solutions.map((item) => (
                <li key={item.id} className="hover:text-[#425DAC]">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[#425DAC] text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-white flex items-center gap-2">
              <ICON_HELPER.LOCATION_ICON className="w-5 h-5 text-[#425DAC] font-semibold" />
              100/1 Example, NY - 00000
            </p>
            <p className="text-white flex items-center gap-2 mt-2">
              <ICON_HELPER.PHONE_ICON className="w-5 h-5 text-[#425DAC] font-semibold" />
              (950) 222 8687
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
            <button className="bg-[#425DAC] px-8 py-2 rounded-r-lg hover:bg-[#425DAC] text-white">➜</button>
          </div>
        </div>
      </div>

      <div className="text-center text-white text-sm  p-5 bg-[#425DAC]">
        © 2024 <span className="text-[#54B685] font-semibold">IntelyTech</span> All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
