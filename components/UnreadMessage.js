import React from 'react';

function UnreadMessage({title}) {
    return(
        <div className="hidden lg:block mb-3 w-[320px]">
            <div className=" dark:border-orange px-5 relative w-auto h-[241px] border-gray-500 border-[3px] rounded-lg "> 
                <div className="dark:text-orange dark:bg-back dark:border-orange items-center flex justify-center bg-orange rounded-xl text-white font-title py-4 w-[230px]  h-[27px] mx-auto mt-[16px] mb-[13px]">
                    {title}
                </div>
                <div className=" wx-auto justify-center bg-gray-500 h-[2px] dark:bg-orange"></div>
            </div>
        </div>
    )
}

export default UnreadMessage;