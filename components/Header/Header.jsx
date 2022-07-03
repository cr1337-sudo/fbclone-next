import Image from "next/image";
import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center  sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md ">
      {/* Left */}
      <div className="flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder=" Search Facebook"
            className="hidden md:flex  bg-transparent outline-none ml-2  items-center flex-shrink placeholder-gray-500"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 items-center">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session?.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3">
          {session?.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
