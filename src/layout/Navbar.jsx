import React, { useState } from "react";
import { NavMenu } from "../helper/dataHelper";
import { Link, useLocation } from "react-router-dom";
import { Image_Helper } from "../helper/imageHelper";
import { ICON_HELPER } from "../helper/iconHelper";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="shadow-md py-4 w-full h-auto bg-[#425DAC] flex flex-row items-center justify-between px-[8vw] sticky top-0 z-30">
      <div>
        <Link to={"/"}>
          <img src={Image_Helper.navlogo} alt="Logo" className="w-[150px] h-[50px] bg-white" />
        </Link>
      </div>

      <div className="hidden lg:flex gap-x-5 xl:gap-x-10 justify-center px-4">
        <ul className="flex space-x-10">
          {NavMenu.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id} className="text-white font-semibold text-lg">
                <a href={item.path} className={`${isActive ? "text-[#54B685]" : "hover:text-[#54B685]"} transition-all duration-300`}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden lg:block">
        <button className="bg-[#54B685] text-white font-semibold rounded py-2 px-4">Get Started!</button>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? (
            <div>
              <ICON_HELPER.MENU_CLOSE_ICON className="size-[35px]" />
            </div>
          ) : (
            <div>
              <ICON_HELPER.MENU_ICON className="size-[35px]" />
            </div>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[73px] right-0 w-full bg-[#425DAC] lg:hidden px-[5vw] py-4 ">
          <ul className="space-y-4">
            {NavMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.id} className="text-white font-semibold text-lg">
                  <a href={item.path} className={`${isActive ? "text-[#54B685]" : "hover:text-[#54B685]"} transition-all duration-300`}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#54B685] text-white font-semibold rounded py-2 px-4 w-full mt-4">Get Started!</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
