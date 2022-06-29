import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className="cursor-pointer flex items-center md:px-5 lg:px-10 sm:h-14 hover:bg-gray-100 rounded-xl
      group active:border-b-2 active:border-blue-500 
    "
    >
      <Icon
        className={`h-6 
        text-gray-500
      group-hover:text-blue-500
      text-center 
      sm:h-7 mx-auto
      ${active && "text-blue-500"}
      `}
      />
    </div>
  );
};

export default HeaderIcon;
