import Head from "next/head";
import Image from "next/image";
import StarIcon from "../Icons/StarIcon";
import EyeIcon from "../Icons/EyeIcon";
import DownArrow from "../Icons/DownArrow";
// import { motion } from "framer-motion"

function demo() {
    return(
        <div className="bg-back relative h-screen lg:mx-auto">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className = "h-screen flex-col flex justify-between" >
        <div className= "relative h-[500px] w-[90%] md:w-[600px] mx-auto my-1">
        <div>  
        <Image 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
            layout="fill"
            objectFit="cover"
             />
        </div>
        <div className = "mix-blend-overlay" stroke = "white">
        B
        </div>     
             
        </div>
        <div className = "bg-inside md:w-[600px] flex flex-col w-[96%] rounded-lg h-[220px] mb-1 lg:mb-8 md:pb-0 mt-auto lg:h-[220px] mx-auto justify-between">
          <div className = "h-[150px] w-[100%] flex flex-row justify-between px-4">
            <div className = "h=[150px] w-[70%] py-4 felx flex-col ">
              <div className = "text-white text-[18px] font-sans font-semibold flex flex-row "> 
                Technopitch <div className="py-0.5 px-1"><StarIcon /></div>
              </div>    
              <div className = "text-white text-[15px] font-sans leading-5 ">
                Epsilon Robotics Club,<br />
                IIT Bhilai<br />
                <div className= "flex flex-row">
                <EyeIcon /><div className="py-0.5">1024 views<br /></div>
                </div>
                Reg last date :22/06/2022
              </div>
            </div>

            <div className="h-[120px] w-[100px] py-5  flex flex-col ">
              <div className = "h-[120px] w-[100px] border-2 bg-orange rounded-lg" >
                <div className = "text-orange text-[25px] flex bg-inside rounded-t-lg font-semibold justify-center font-sans">FREE</div>
                <div className="rounded-tl-0 rounded-tr-0 rounded-bl-lg rounded-br-lg  ">
                <div className = "text-white text-[14px] flex justify-center font-regular font-sans">participating</div>
                <div className = "text-white text-[40px] flex justify-center h-[50px] items-center font-title">15</div>
                </div>
              </div>     
            </div>

          </div>
          {/* button boxes */}
          <div className = "h-[50px] py-1 flex justify-between px-4 py-0 pt-0">
          <button className="h-10 w-[100px] text-orange font-title text-[25px] border-white border-2 rounded-full">ASK</button>
          <div className="flex flex-col"><button class="h-10 text-orange font-semibold text-[12px] bg-inside rounded-full">Know more <div className = "px-10"><DownArrow /></div></button></div>
          <button className="h-10 w-[100px] text-orange font-title text-[25px] border-white border-2 rounded-full">JOIN</button>

          </div>
        </div>
      </main>
      </div>
      
    
    );
}

export default demo; 

