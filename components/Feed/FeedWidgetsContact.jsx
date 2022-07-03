import Image from "next/image";
import React from "react";

const FeedWidgetsContact = ({ src, name }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        src={src}
        className="rounded-full bg-gray-100"
        objectFit="cover"
        width={50}
        height={50}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bg-green-400 rounded-full p-2 left-7 bottom-2"></div>
    </div>
  );
};

export default FeedWidgetsContact;
