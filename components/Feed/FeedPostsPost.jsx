import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const FeedPostsPost = ({
  key,
  name,
  message,
  email,
  timestamp,
  image,
  postImage,
}) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            alt="Profile pic"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading..</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* Footer  */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md to-gray-400 border-t">
        <section className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </section>
        <section className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />

          <p className="text-xs sm:text-base">Comment</p>
        </section>
        <section className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </section>
      </div>
    </div>
  );
};

export default FeedPostsPost;
