import FeedStoryCard from "./FeedStoryCard";

const stories = [
  {
    name: "Sony",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zyv",
  },
];

const FeedStories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <FeedStoryCard
          name={story.name}
          src={story.src}
          profile={story.src}
          key={index}
        />
      ))}
    </div>
  );
};

export default FeedStories;
