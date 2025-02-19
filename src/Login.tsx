import * as React from "react";

function SvgLogin(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9 2C8.44772 2 8 2.44772 8 3V9H10V4H19V20H10V15H8V21C8 21.5523 8.44772 22 9 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H9ZM13.865 13L12.7318 14.3598C12.3782 14.7841 12.4355 15.4147 12.8598 15.7682C13.2841 16.1218 13.9147 16.0645 14.2682 15.6402L16.7682 12.6402C17.0773 12.2694 17.0773 11.7307 16.7682 11.3598L14.2682 8.35984C13.9147 7.93556 13.2841 7.87824 12.8598 8.2318C12.4355 8.58537 12.3782 9.21593 12.7318 9.64021L13.8649 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H13.865Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogin;
