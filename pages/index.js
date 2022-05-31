import Head from "next/head";
import AppBody from "../components/AppBody";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="dark:bg-back  w-screen">
      <Head>
        <title>Troops</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <AppBody />
      </main>
      <Footer />
    </div>
  );
}
