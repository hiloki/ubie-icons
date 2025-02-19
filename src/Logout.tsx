import * as React from "react";

function SvgLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22H15C15.5523 22 16 21.5523 16 21V17H14V20H5V4H14V7H16V3C16 2.44772 15.5523 2 15 2H4ZM17.865 13L16.7318 14.3598C16.3782 14.7841 16.4355 15.4147 16.8598 15.7682C17.2841 16.1218 17.9147 16.0645 18.2682 15.6402L20.7682 12.6402C21.0773 12.2694 21.0773 11.7307 20.7682 11.3598L18.2682 8.35984C17.9147 7.93556 17.2841 7.87824 16.8598 8.2318C16.4355 8.58537 16.3782 9.21593 16.7318 9.64021L17.8649 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H17.865Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogout;
