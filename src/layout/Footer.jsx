import React from "react";
import { ICON_HELPER } from "../helper/iconHelper";

const Footer = () => {
  const icons_footer = [
    {
      id: "1",
      icons: <ICON_HELPER.PHONE_ICON />,
      title: "Contact",
      content: "0987654321",
    },
    {
      id: "2",
      icons: <ICON_HELPER.MAIL_ICON />,
      title: "Email Address",
      content: "intelyt@domain.com",
    },
    {
      id: "3",
      icons: <ICON_HELPER.TIME_ICON />,
      title: "Office Timing",
      content: "9:00AM to 8:00PM(Mon - Friday)",
    },
    {
      id: "4",
      icons: <ICON_HELPER.LOCATION_ICON />,
      title: "Our Location",
      content: "38 South Street, NY",
    },
  ];
  return (
    <div>
      <div className="flex">
        {icons_footer.map((res, index) => {
          return <div key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default Footer;
