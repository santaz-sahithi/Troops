function ChatBox({ title }) {
  return (
    <div className="flex shadow-md bg-orange  md:hover:scale-105 md:active:scale-95 transition duration-200 ease-out rounded-[5px] mx-1 mb-3 px-2 py-1 cursor-pointer dark:bg-inside dark:border-orange dark:border-2">
      <div className=' text-white flex-grow dark:text-orange'>#{title}</div>
      <div className='text-white dark:text-orange'>D</div>
    </div>
  );
}

export default ChatBox;
