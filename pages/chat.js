import Head from "next/head";
import ChatBox from "../components/ChatBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { motion } from "framer-motion"

function chat() {
  return (
    <div className="dark:bg-black">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="dark:bg-inside font-title flex  lg:w-[992px] mx-auto lg:border rounded-lg lg:border-orange  mt-3 h-screen shadow-xl">
        <div className="flex flex-col w-screen lg:w-1/3 lg:border-r-2 border-orange px-2 lg:px-4 lg:py-3">
          <ChatBox title="unread" />
          <ChatBox title="events" />
          <ChatBox title="college" />
          <ChatBox title="unread" />
        </div>
        <div className="hidden">Hello I am Chat screen</div>
      </main>
      <Footer />
    </div>
  );
}

export default chat;
