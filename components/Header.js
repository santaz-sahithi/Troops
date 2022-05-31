import Image from "next/image";
import search_icon from "../Icons/search_icon.svg";
import DarkPage from "../components/DarkPage";
import HomeIcon from "../Icons/HomeIcon";
import ChatIcon from "../Icons/ChatIcon";
import ClubIcon from "../Icons/ClubIcon";
import NotifIcon from "../Icons/NotifIcon";

function Header() {
  return (
    <div className="font-title border-b-[3px] dark:bg-back border-orange sticky top-0 bg-white z-10 w-screen lg:sticky">
      <div className="md:grid md:grid-cols-3 relative lg:w-[992px] flex items-center justify-between h-16 py-3 px-5 md:px-2 lg:px-0 lg:mx-auto">
        {/* Title Logo */}
        <div className="cursor-pointer flex items-center text-center text-orange text-[34px]">
          Troops
          <DarkPage />
        </div>
        {/* Search Input */}
        <input
          type="text"
          className="border-2 hidden font-sans font-bold md:inline-flex dark:bg-back placeholder-gray-500 dark:text-gray-300 text-gray-500 border-solid rounded-md w-52 border-orange px-2 outline-none text-center"
          placeholder="Search"
        />

        {/* Big Screen NavBar */}
        <div className='hidden md:flex md:justify-between'>
          <HomeIcon />
          <ChatIcon />
          <ClubIcon />
          <NotifIcon />
          <div className="cursor-pointer rounded-full relative h-10 w-10">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Search Icon */}
        <Image src={search_icon} className="md:invisible" objectFit="contain" />
      </div>
    </div>
  );
}

export default Header;
