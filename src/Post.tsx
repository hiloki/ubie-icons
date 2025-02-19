import * as React from "react";

function SvgPost(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 20V4H19V11H21V3C21 2.44772 20.5523 2 20 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44771 22 3 22H11V20H4ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H7ZM7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H10C10.5523 12 11 11.5523 11 11C11 10.4477 10.5523 10 10 10H7ZM17 12C17.5523 12 18 12.4477 18 13V16.0002H21C21.5523 16.0002 22 16.448 22 17.0002C22 17.5525 21.5523 18.0002 21 18.0002H18V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V18.0002H13C12.4477 18.0002 12 17.5525 12 17.0002C12 16.448 12.4477 16.0002 13 16.0002H16V13C16 12.4477 16.4477 12 17 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPost;
