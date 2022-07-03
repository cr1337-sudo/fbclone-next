import React from "react";
import FeedInputBox from "./FeedInputBox";
import FeedStories from "./FeedStories";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/*  Stories */}
        <FeedStories />
        {/* InputBox */}
        <FeedInputBox />
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
