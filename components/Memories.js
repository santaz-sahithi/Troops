function Memories() {
  return (
    <div className="h-screen dark:bg-gray lg:w-[550px] lg:mx-auto  ">
    <div className = "dark:bg-black text-orange text-[25px] font-extrabold text-center" > Memories </div>
    <div className="relative text-orange">
    <div className="flex flex-col text-orange font-Fredoka  font-extrabold ">
  <svg className="w-2 h-2 text-orange font-Fredoka absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#FF3807"/></svg>
  <select className="border border-orange rounded-full font-extrabold text-orange h-10 pl-5 pr-10 bg-white hover:border-orange focus:outline-none appearance-none">
    <option className="text-orange font-extrabold hover:after:bg-orange ">Activities</option>
    <option className="block px-4 py-2 text-orange hover:bg-orange hover:text-white">College</option>
    <option className="block px-4 py-2 text-orange hover:bg-orange hover:text-white">Club</option>
    <option className="block px-4 py-2 text-orange hover:bg-orange hover:text-white">Events</option>
    </select>
  <div className="justify-between flex flex-row border-b-2 pb-0 border-orange">
    <div className="font-Fredoka text-orange text-[17px] w-fill h-12 pt-4 ">Technopitch</div>
    <div className="font-Fredoka text-gray-500 text-[13px] h-12 pt-5">jun 2021</div>
    </div>
  </div>
  </div>
  
    
    </div> 
  );
}

export default Memories;
