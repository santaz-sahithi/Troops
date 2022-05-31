import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Memories from "../components/Memories";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
// import { motion } from "framer-motion"

function Memories1() {
  const [selected , setSelected ] = useState("");
      return(
      <div className="dark:bg-back relative h-screen lg:mx-auto">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <Header />
      <Memories />
      <Dropdown selected={selected} setSelected={setSelected} />
      <Footer />
       </div>
    );
}

export default Memories1; 