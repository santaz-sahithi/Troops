import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
// import { motion } from "framer-motion"

function Eventsfilter() {
    return(
        <div className="dark:bg-back">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Filter />
      <Footer />

       </div>
    );
}

export default Eventsfilter; 