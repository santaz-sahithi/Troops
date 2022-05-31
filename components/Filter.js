function Filter(){
    return(
        <main className=" h-screen ">
            <div className="dark:bg-inside flex flex-col lg:w-[992px] lg:mx-auto border-2 mx-2 px-3 rounded-lg border-orange dark:border mt-3 h-[320px] shadow-xl">
                <div className="font-black text-orange text-[20px] w-fill border-b-2 h-12 pt-2 border-orange ">Filter</div>
                <div className ="w-52 px-2  h-8 justify-around mt-3 font-extrabold text-white dark:text-orange bg-orange dark:bg-inside dark:border-orange dark:border-2 rounded-md pt-1">Choose club here</div>
                <div className="font-black text-orange text-[20px] w-fill h-10 pt-3 mb-2">Range & Type</div>
                
                <div className="text-orange font-bold text-[18px] grid grid-cols-2 w-60 "> 
                <div>
                <input type = "checkbox" className="form-checkbox h-[18px] w-[18px] rounded-[5px] border-orange text-orange border-[2px] bg-transparent dark:checked:text-orange " />  
                <label> Private </label>
                </div>
                <div>
                <input type = "checkbox" className="form-checkbox h-[18px] w-[18px] rounded-[5px] border-orange text-orange border-[2px] bg-transparent dark:checked:text-orange " />  
                <label> Public </label>
                </div>
                <div className="font-extrabold text-gray-500  dark:text-gray-500  text-[12px] w-[325px] h-12 pt-2  ">*Private : Only those events which are aviable for you<br />
                &nbsp; Public   : Every event aviable right now</div>
                </div>
                <div className="text-orange font-bold text-[18px] grid grid-cols-2 w-60 mb-2">
                <div>
                <input type = "checkbox" className="form-checkbox h-[18px] w-[18px] rounded-[5px] border-orange text-orange border-[2px] bg-transparent dark:checked:text-orange " />  
                <label> Online </label>
                </div>
                <div>
                <input type = "checkbox" className="form-checkbox h-[18px] w-[18px] rounded-[5px] border-orange text-orange border-[2px] bg-transparent dark:checked:text-orange " />  
                <label> Offline </label>
                </div>
                                                           
                </div>
                
                <div className ="w-52 px-2 h-8 justify-around my-2 font-extrabold text-white dark:text-orange dark:border-orange dark:bg-inside dark:border-2 bg-orange rounded-md pt-1 ">Type of</div>
            </div>
        </main>
    )
                                                                                                                                                  
}

export default Filter;

