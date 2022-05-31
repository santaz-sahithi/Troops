function NotifIcon({opacity}) {
  return (
    <div className='cursor-pointer'>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="none" />
        <path
          d="M33.4124 27.4555C31.4061 25 29.9897 23.75 29.9897 16.9805C29.9897 10.7813 26.8241 8.57266 24.2186 7.5C23.8725 7.35781 23.5468 7.03125 23.4413 6.67578C22.9843 5.12031 21.703 3.75 19.9999 3.75C18.2968 3.75 17.0147 5.12109 16.5624 6.67734C16.4569 7.03672 16.1311 7.35781 15.7851 7.5C13.1765 8.57422 10.014 10.775 10.014 16.9805C10.0101 23.75 8.59365 25 6.5874 27.4555C5.75615 28.4727 6.48427 30 7.93818 30H32.0694C33.5155 30 34.239 28.468 33.4124 27.4555Z"
          stroke="#FF8307"
          fill="#FF8307"
          fill-opacity= {opacity || 0}
          stroke-opacity="1"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 30V31.25C25 32.5761 24.4732 33.8479 23.5355 34.7855C22.5978 35.7232 21.3261 36.25 20 36.25C18.6739 36.25 17.4021 35.7232 16.4645 34.7855C15.5268 33.8479 15 32.5761 15 31.25V30"
          stroke="#FF8307"
          fill="#FF8307"
          fill-opacity= {opacity || 0}
          stroke-opacity="1"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default NotifIcon;
