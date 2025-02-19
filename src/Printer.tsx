import * as React from "react";

function SvgPrinter(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 9H4V15H6V14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14V15H20V9ZM19 12V10H17V12H19ZM16 15H8V20H16V15ZM8 7H16V4H8V7ZM6 7H3C2.44772 7 2 7.44772 2 8V16C2 16.5523 2.44772 17 3 17H6V21C6 21.5523 6.44771 22 7 22H17C17.5523 22 18 21.5523 18 21V17H21C21.5523 17 22 16.5523 22 16V8C22 7.44772 21.5523 7 21 7H18V3C18 2.44772 17.5523 2 17 2H7C6.44772 2 6 2.44772 6 3V7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPrinter;
