const Achievements = ({Achieves}) => {
    return (
        <div className="font-title lg:w-[992px] mx-auto mt-5">
            <div className="text-[25px] font-title text-orange">
                {Achieves}
            </div>
            <div className="dark:bg-inside font-title lg:w-[992px] border-[2px] mx-auto rounded-lg border-orange dark:border mt-5 h-[175px] shadow-lg"></div>
        </div>
    )
}
export default Achievements