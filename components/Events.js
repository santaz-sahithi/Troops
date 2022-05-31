function Events({ eventCount }) {
  return (
    <div className="bg-orange font-title text-white flex flex-col justify-center items-center rounded-[20px] h-[230px] mb-3">
      <h1 className="text-[45px]"> &lt; {eventCount} &gt; </h1>
      <h3 className="text-[30px] -mt-3">Events</h3>
      <h4>for you</h4>
    </div>
  );
}

export default Events;
