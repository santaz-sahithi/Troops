import { useRouter } from "next/dist/client/router";

function HomeIcon({ opacity }) {
  const router = useRouter();

  const homeClickHandler = () => {
    router.push("/");
  };

  return (

    <div onClick={homeClickHandler} className='cursor-pointer'>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 15.0002L20 3.3335L35 15.0002V33.3335C35 34.2176 34.6488 35.0654 34.0237 35.6905C33.3986 36.3156 32.5507 36.6668 31.6667 36.6668H8.33333C7.44928 36.6668 6.60143 36.3156 5.97631 35.6905C5.35119 35.0654 5 34.2176 5 33.3335V15.0002Z"
          fill="#FF8307"
          fillOpacity={opacity || 0}
          stroke="#FF8307"
          strokeOpacity="1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 36.6667V20H25V36.6667" fill="none" />
        <path
          d="M15 36.6667V20H25V36.6667"
          stroke="#FF8307"
          strokeOpacity="1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default HomeIcon;
