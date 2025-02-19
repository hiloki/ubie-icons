import * as React from "react";

function SvgCommentOutline(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 19V17H6H4V5H20V17H11.5H10.6716L10.0858 17.5858L8 19.6716V19ZM2 17C2 18.1046 2.89543 19 4 19H6V21C6 22.5 7.5 23 8.5 22L11.5 19H20C21.1046 19 22 18.1046 22 17V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V17ZM6 9C6 8.44772 6.44772 8 7 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H7C6.44771 10 6 9.55228 6 9ZM6 13C6 12.4477 6.44772 12 7 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H7C6.44772 14 6 13.5523 6 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCommentOutline;
