import Image from "next/image";
import ChatIcon from "../Icons/ChatIcon";
import ClubIcon from "../Icons/ClubIcon";
import HomeIcon from "../Icons/HomeIcon";
import NotifIcon from "../Icons/NotifIcon";

function Footer() {
  return (
    <div className="dark:bg-back z-50 bg-white md:hidden sticky w-screen border-orange border-t-[3px] px-2 pt-3 pb-1 flex justify-between bottom-0">
      <HomeIcon />
      <ChatIcon />
      <ClubIcon />
      <NotifIcon />
      <div className="relative h-10 w-10">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Footer;
