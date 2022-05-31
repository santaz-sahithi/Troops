import { useRouter } from "next/dist/client/router";

function ChatIcon({ opacity }) {
  const router = useRouter();

  const chatClickHandler = () => {
    router.push("/chat");
  };

  return (
    <div onClick={chatClickHandler} className="cursor-pointer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="none" />
        <path
          d="M22.8 30.9891C29.0221 30.9891 32.134 30.9891 34.0662 29.0854C36 27.1833 36 24.1198 36 17.9945C36 11.8692 36 8.80578 34.0662 6.9037C32.134 5 29.0221 5 22.8 5H16.2C9.97785 5 6.86595 5 4.9338 6.9037C3 8.80578 3 11.8692 3 17.9945C3 24.1198 3 27.1833 4.9338 29.0854C6.01125 30.1477 7.455 30.6171 9.6 30.8234"
          stroke="#FF8307"
          strokeOpacity="1"
          fill="#FF8307"
          fillOpacity={opacity || 0}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.8001 30.9892C20.7607 30.9892 18.5134 31.8014 16.4624 32.8491C13.1657 34.5335 11.5174 35.3765 10.7056 34.8388C9.89377 34.3028 10.0472 32.6379 10.3558 29.3097L10.4251 28.5527"
          stroke="#FF8307"
          fill="#FF8307"
          fillOpacity={opacity || 0}
          strokeOpacity="1"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default ChatIcon;
