import Events from "./Events";
import UnreadMessage from "./UnreadMessage";

function AppBody() {
  return (
    <div className="dark:border-orange flex justify-between w-screen lg:w-[992px] mx-auto h-5/6 m-3 rounded-md">
      {/* Feed Section - LEFT */}
      <div className="px-4 lg:px-0 relative w-[600px] md:w-[600px] mx-auto lg:mx-0">
        <Events eventCount={15} />
        <Events eventCount={15} />
        <Events eventCount={15} />
        <Events eventCount={15} />
        <Events eventCount={15} />
        <Events eventCount={15} />
        <Events eventCount={15} />
      </div>
      <div className=" top-[20px] ">
        <UnreadMessage title='unread Messages' />
        <UnreadMessage title='Schedule' />
      </div>
    </div>
    
  );
}

export default AppBody;
