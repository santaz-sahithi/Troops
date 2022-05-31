import Image from "next/image";

const Profileinfo = ({Profilename, Profileid, Profileclg}) => {
    return (
    <div className="dark:bg-inside font-title flex flex-col lg:w-[992px] border-[2px] lg:mx-auto mx-2 rounded-lg border-orange dark:border mt-3 h-[400px] shadow-lg">
       <div className="flex flex-col justify-center items-center w-screen pt-[40px] lg:w-[992px]">
            <div className="relative h-[150px] w-[150px]">
            <Image 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
             />
            </div>
            <div className="text-[30px] text-orange pt-2">
                {Profilename}
            </div>
            <div className="font-sans text-sm font-bold text-orange">
                ID:{Profilename}@{Profileid}
            </div>
       </div>
        <div className="text-orange border-b-2 ml-2 border-orange w-[95px] sm:ml-14 md:ml-24 lg:mx-[300px]">
            Studies at:
        </div>
        <div className="flex flex-row pt-2 sm:ml-14 md:ml-24 lg:ml-[300px] ">
            <div className="relative h-[40px] w-[40px] ml-2 ">
                <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                />
            </div>  
            <div className="font-sans text-sm font-bold h-[40px] pt-2 pl-3 text-orange">
                {Profileclg}
            </div> 
        </div>
    </div>
    )
}
export default Profileinfo
