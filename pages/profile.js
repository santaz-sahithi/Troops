import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profileinfo from "../components/Profileinfo";
import Achievements from "../components/Achievements";
// import { motion } from "framer-motion"

function Profile() {
  return (
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
      <main>
      <Profileinfo Profilename='Poojith' Profileid={999999} Profileclg="INDIAN INSTITUTE OF TECHNOLOGY-BHILAI"/> 
      <Achievements Achieves='Achievements:' />
      <Achievements Achieves='Member of:' />
      <Achievements Achieves='Interested in:' />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
