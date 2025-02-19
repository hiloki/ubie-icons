import * as React from "react";

function SvgBookmarkOutline(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 4C7.44772 4 7 4.44772 7 5V20.3027L11.5153 17.8004C11.8168 17.6333 12.1832 17.6333 12.4847 17.8004L17 20.3027V5C17 4.44772 16.5523 4 16 4H8ZM5 5C5 3.34315 6.34315 2 8 2H16C17.6569 2 19 3.34315 19 5V22C19 22.5523 18.5523 23 18 23H17.9998C17.8302 23 17.6634 22.9569 17.5151 22.8747L12 19.8184L6.4849 22.8747C6.33657 22.9569 6.16977 23 6.00019 23H6C5.44772 23 5 22.5523 5 22V5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBookmarkOutline;
