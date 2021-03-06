import React from "react";
import FeedInputBox from "./FeedInputBox";
import FeedPosts from "./FeedPosts";
import FeedStories from "./FeedStories";

const Feed = ({ posts }) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl ">
        {/*  Stories */}
        <FeedStories />
        {/* InputBox */}
        <FeedInputBox />
        {/* Posts */}
        <FeedPosts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
